'use client';

import { H2 } from "@/components/ui-extends/heading";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetCategory } from "@/services/category/queries";
import { TabsContent } from "@radix-ui/react-tabs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComponentPropsWithoutRef, FC, Suspense } from "react";

export default function CategoryDetailPage({ params }: {
    params: { slug: string[]; }
}) {
    const { slug } = params;
    const [id, menu] = slug;
    const { data, isFetched } = useGetCategory(id);
    if (isFetched) {
        if (data?.length) {
            const category = data[0];
            const tags = category.tags as string[];
            return (
                <div className="flex flex-col h-full w-full p-10">
                    <div className="flex gap-8">
                        <div className="relative w-44 h-52">
                            {
                                category?.image_url
                                && <Image className="rounded-lg" src={category?.image_url} fill alt={category.name} />
                            }

                        </div>
                        <div>
                            <H2>{category.name}</H2>
                            <div></div>
                            <div className="flex flex-wrap gap-2 max-w-60">
                                {tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}

                            </div>
                        </div>

                    </div>
                    <div className="pt-4">
                        <Tabs defaultValue={menu} className="w-full h-full">
                            <TabsList className="bg-transparent">
                                <CategoryTabsTrigger value="lives">
                                    <Link href={`/category/${id}/lives`}>
                                        Lives
                                    </Link>
                                </CategoryTabsTrigger>
                                <CategoryTabsTrigger value="videos">
                                    <Link href={`/category/${id}/videos`}>
                                        Video
                                    </Link>
                                </CategoryTabsTrigger>
                                <CategoryTabsTrigger value="clips">
                                    <Link href={`/category/${id}/clips`}>
                                        Clips
                                    </Link>
                                </CategoryTabsTrigger>
                            </TabsList>
                            <TabsContent value="lives">
                                <ScrollArea>
                                    <Suspense fallback={<>로딩</>}>
                                        
                                    </Suspense>
                                </ScrollArea>

                            </TabsContent>
                            <TabsContent value="videos">
                                <ScrollArea>
                                    asdasdd
                                </ScrollArea>
                            </TabsContent>
                            <TabsContent value="clips">
                                <ScrollArea>
                                    clips
                                </ScrollArea>
                            </TabsContent>
                        </Tabs>

                    </div>
                </div>
            );
        } else {
            notFound();
        }
    }

}


const CategoryTabsTrigger: FC<ComponentPropsWithoutRef<typeof TabsTrigger>> = ({ children, ...props }) => {
    return (
        <TabsTrigger className="rounded-none data-[state=active]:shadow-none data-[state=active]:bg-none data-[state=active]:text-pink-600 data-[state=active]:border-b-pink-500 data-[state=active]:border-b-2 text-base font-extrabold" {...props}>
            {children}
        </TabsTrigger>
    )
}
