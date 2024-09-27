'use client';

import { SideNavigationMenu, SideNavigationMenuItem } from "@/components/sidebar-menu/side-navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChevronDownIcon, HomeIcon, ListBulletIcon, VideoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

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
                <SideNavigationMenu >
                    <SideNavigationMenuItem url='/'>
                        <HomeIcon className="size-6" />
                        전체방송
                    </SideNavigationMenuItem>
                    <SideNavigationMenuItem url='/clips'>
                        <VideoIcon className="size-6" />
                        인기클립
                    </SideNavigationMenuItem>
                    <SideNavigationMenuItem url='/category'>
                        <ListBulletIcon className="size-6" />
                        카테코리
                    </SideNavigationMenuItem>
                </SideNavigationMenu>
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
