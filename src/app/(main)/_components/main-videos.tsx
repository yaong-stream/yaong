'use client';
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetVideos } from "@/services/video/queries";
import { FC } from "react";
import { VideoPreviewLoadingItem } from "./video-preview-loading-Item";
import { VideoPreviewItem } from "./video-preview-Item";


const MainVideos: FC = () => {
    const { data } = useGetVideos();

    return (
        <ScrollArea className="w-full h-full">
            <div className="p-6 flex flex-row gap-4 flex-wrap min-w-full h-full">

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, idx) => <VideoPreviewItem key={v.id} title={v.title} />)}
                <VideoPreviewLoadingItem />
                <VideoPreviewLoadingItem />
                <VideoPreviewLoadingItem />
                <VideoPreviewLoadingItem />
                <VideoPreviewLoadingItem />
                <VideoPreviewLoadingItem />
                <VideoPreviewLoadingItem />
                <VideoPreviewLoadingItem />
                <VideoPreviewLoadingItem />
                <VideoPreviewLoadingItem />
            </div>
        </ScrollArea>
    );
};


export { MainVideos };

