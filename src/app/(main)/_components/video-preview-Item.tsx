import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const VideoPreviewItem = ({ title }) => {
    return (
        <div className="flex flex-col w-96 h-72 max-w-full flex-grow flex-shrink-0 basis-auto">
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


export { VideoPreviewItem };
