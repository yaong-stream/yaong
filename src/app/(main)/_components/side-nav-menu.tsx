'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChevronDownIcon, HomeIcon, ListBulletIcon, VideoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const SideNavigation: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ul className="p-4 flex flex-col gap-4 m-0">
            {children}
        </ul>
    );
};

type ISideNavigationItem = PropsWithChildren<{
    url: string,
}>;

const SideNavigationItem: FC<ISideNavigationItem> = ({ children, url }) => {
    return (
        <li>
            <Link href={url}>
                <div className="flex flex-row items-center gap-4 font-bold">
                    {children}
                </div>
            </Link>
        </li>
    );
};

const SubScription: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ul>
            {children}
        </ul>
    );
}

const SubScriptionItem: FC<PropsWithChildren<{
    className?: string;
}>> = ({ children, className }) => {
    return (
        <li className={`py-2 px-4 flex flex-row items-center gap-4 ${className ?? ''}`}>
            {children}
        </li>
    );
}



export const SideNavMenu = () => {
    return (
        <aside className="h-full w-80 border-red-800 border-2">
            <ScrollArea>
                <SideNavigation >
                    <SideNavigationItem url='/'>
                        <HomeIcon className="size-6" />
                        전체방송
                    </SideNavigationItem>
                    <SideNavigationItem url='/clips'>
                        <VideoIcon className="size-6" />
                        인기클립
                    </SideNavigationItem>
                    <SideNavigationItem url='/category'>
                        <ListBulletIcon className="size-6" />
                        카테코리
                    </SideNavigationItem>
                </SideNavigation>
                <Separator />

                <h2 className="pl-4 pt-4 font-extrabold text-base">구독</h2>
                <SubScription>
                    <SubScriptionItem>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="line-clamp-1">가나다라마바사가나다라마바사가나다라마바사</span>
                    </SubScriptionItem>
                    <SubScriptionItem>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="line-clamp-1">가나다라마바사가나다라마바사가나다라마바사</span>
                    </SubScriptionItem>
                    <SubScriptionItem>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="line-clamp-1">가나다라마바사가나다라마바사가나다라마바사</span>
                    </SubScriptionItem>
                    <SubScriptionItem>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="line-clamp-1">가나다라마바사가나다라마바사가나다라마바사</span>
                    </SubScriptionItem>


                    <SubScriptionItem className="justify-center">
                        <div className="p-2 inline-flex gap-2 rounded-2xl border-zinc-100 border-2 cursor-pointer hover:bg-zinc-200">
                            <span className="line-clamp-1 text-sm">더보기</span>
                            <ChevronDownIcon className="size-5" />
                        </div>
                    </SubScriptionItem>
                </SubScription>



                <Separator />
            </ScrollArea>

        </aside>
    );
}
