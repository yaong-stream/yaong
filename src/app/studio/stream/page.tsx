import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"






export default function StremingPage() {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="w-full h-full rounded-lg border"
        >
            <ResizablePanel defaultSize={50}>
                <div className="w-full h-full flex flex-col">
                    <div className="flex items-center p-1  w-full bg-slate-400">
                        <h5 className="scroll-m-20 text-base font-semibold tracking-tight">
                            방송 미리보기
                        </h5>
                    </div>
                    <div className="flex items-center justify-center w-full h-96 bg-slate-100">
                        화면
                    </div>
                    <div>
                        방송 설정
                    </div>
                    <span className="font-semibold">라이브설정 및 미리보기 화면</span>
                </div>
            </ResizablePanel>
            <ResizableHandle className="w-1 hover:bg-pink-500 active:bg-pink-500" />
            <ResizablePanel defaultSize={20} minSize={20}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">채팅</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}