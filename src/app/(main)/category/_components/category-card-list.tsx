'use client';

import { H5 } from "@/components/ui-extends/heading";
import Image from "next/image";
import Link from "next/link";
import { FC, forwardRef, HTMLAttributes } from "react";



const CategoryCardList = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ children }, ref) => (
    <div className="flex flex-wrap gap-4 pt-4 w-full h-full" ref={ref}>
        {children}
    </div>
));

CategoryCardList.displayName = 'CategoryCardList';


type CategoryCardProps = {
    url: string;
    name: string;
    imageUrl?: string | null;
};

const CategoryCard: FC<CategoryCardProps> = ({ name, imageUrl, url }) => {
    return (
        <Link href={url}>
            <div className="flex-grow-0 flex-shrink basis-auto flex flex-col max-w-full w-48 gap-2">
                <div className="relative rounded-sm h-60 bg-gray-400">
                    {imageUrl && <Image className="rounded-sm" src={imageUrl} fill alt={name}></Image>}
                </div>
                <div className="flex flex-col gap-2">
                    <H5>{name}</H5>
                    <span className="text-sm font-light text-gray-500">채널수 1개</span>
                </div>
            </div>
        </Link>
    );
};


export { CategoryCard, CategoryCardList };

