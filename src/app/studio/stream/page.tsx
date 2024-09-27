import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { StremeliveViewer } from "./_components/stream-live-viewer";
import { StremeIiveSetting } from "./_components/stream-Iive-setting";
import { FC, PropsWithChildren } from "react";


const PennelInnerWraper: FC<PropsWithChildren<
    { title: string; }>
> = ({ children, title }) => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex items-center p-1  w-full bg-slate-400">
                <h5 className="scroll-m-20 text-base font-semibold tracking-tight">
                    {title}
                </h5>
            </div>
            {children}
        </div>
    );
}


export default function StremingPage() {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="w-full h-full rounded-lg border">
            <ResizablePanel defaultSize={50}>
                <PennelInnerWraper title="방송 미리보기">
                    <StremeliveViewer />
                    <StremeIiveSetting />
                </PennelInnerWraper>
            </ResizablePanel>
            <ResizableHandle className="w-1 hover:bg-pink-500 active:bg-pink-500 focus:bg-pink-500" />
            <ResizablePanel defaultSize={20} minSize={20}>
                <PennelInnerWraper title="채팅">
                    <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">채팅</span>
                    </div>
                </PennelInnerWraper>

            </ResizablePanel>
        </ResizablePanelGroup>
    );
}