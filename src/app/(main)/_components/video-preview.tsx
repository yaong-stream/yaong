'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetVideos } from "@/services/video/video";
import { FC } from "react";


const VideoPreviewItem = ({title}) => {
    return (
        <div className="flex flex-col w-96 h-72 grow shrink-0 basis-auto">
            <div className="w-full h-full min-h-[200px] bg-slate-700 rounded-sm"></div>
            <div className="p-2 flex gap-2">
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <div className="font-extrabold line-clamp-2">{title}</div>
                    <div>스트리머 이름</div>
                    <div>영상 조회수</div>
                </div>
            </div>
        </div>
    );
}

const VideoPreview: FC = () => {
    const { data } = useGetVideos();

    return (
        <div className="p-6 flex flex-row gap-4 flex-wrap w-full h-full">

            {data?.data?.map((v, idx) => <VideoPreviewItem key={v.id} title={v.title} />)}

        </div>
    );
};


export { VideoPreview };
