'use client';
import { H2 } from "@/components/ui-extends/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CategoryRow, useGetCategories } from "@/services/category/queries";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { CategoryCard, CategoryCardList } from "./category-card-list";
import { PlacehoderCategoryCard } from "./placehoder-category-card";

const Category = () => {


    const categoryCardListRef = useRef<HTMLDivElement>(null);

    const viewportRef = useRef<HTMLDivElement>(null);
    const { ref, inView } = useInView({ root: viewportRef.current });
    const { data, isLoading, fetchNextPage, hasNextPage } = useGetCategories();
    const list = data?.pages.flat() as CategoryRow[];


    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView]);


    return (
        <ScrollArea className="h-full w-full" viewportRef={viewportRef}>
            <div className="w-full h-full py-10 xl:py-20 px-4 xl:px-[calc(10%)]">
                <H2>카테코리</H2>

                <CategoryCardList ref={categoryCardListRef}>
                    {list?.map((v, idx) => <CategoryCard key={idx} name={v.name} imageUrl={v.image_url} />)}
                    {
                        isLoading &&
                        <>
                            <PlacehoderCategoryCard />
                            <PlacehoderCategoryCard />
                            <PlacehoderCategoryCard />
                            <PlacehoderCategoryCard />
                            <PlacehoderCategoryCard />
                            <PlacehoderCategoryCard />
                        </>
                    }
                </CategoryCardList>
                {hasNextPage && <div ref={ref}>{`Header inside viewport ${inView}.`}</div>}
            </div>
        </ScrollArea>
    );
}

export { Category };
