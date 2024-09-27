'use client';

import { SideNavigationMenu, SideNavigationMenuItem } from "@/components/sidebar-menu/side-navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";



export const SideNavMenu = () => {
    return (
        <aside className="h-full w-80 border-red-800 border-2">
            <ScrollArea>
                <SideNavigationMenu >
                    <SideNavigationMenuItem url='/studio'>
                        홈
                    </SideNavigationMenuItem>
                    <SideNavigationMenuItem url='/studio/stream'>
                        방송하기
                    </SideNavigationMenuItem>
                    <SideNavigationMenuItem>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-b-0">
                                <AccordionTrigger className="hover:no-underline text-lg">설정</AccordionTrigger>
                                <AccordionContent>
                                    <SideNavigationMenu>
                                        <SideNavigationMenuItem url='/studio/setting/channel'>
                                            채널
                                        </SideNavigationMenuItem>
                                        <SideNavigationMenuItem url='/studio/setting/streaming'>
                                            스트리밍
                                        </SideNavigationMenuItem>
                                    </SideNavigationMenu>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </SideNavigationMenuItem>
                </SideNavigationMenu>

            </ScrollArea>

        </aside>
    );
}
