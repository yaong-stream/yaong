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
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">라이브설정 및 미리보기 화면</span>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50} minSize={20}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">채팅</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}