import { Skeleton } from "@/components/ui/skeleton";

const VideoPreviewLoadingItem = () => {
    return (
        <div className="flex flex-col w-96 h-72 max-w-full flex-grow flex-shrink-0 basis-auto gap-2">
            <Skeleton className="w-full h-full min-h-[200px] rounded-sm" />
            <div className="pb-2 flex gap-2">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="flex flex-col gap-2 w-1/3">
                    <Skeleton className="w-full h-4 rounded-lg" />
                    <Skeleton className="w-full h-4 rounded-lg" />
                </div>

            </div>
        </div>
    );
};


export { VideoPreviewLoadingItem };