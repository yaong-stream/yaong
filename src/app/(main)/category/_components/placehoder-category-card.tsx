import { Skeleton } from "@/components/ui/skeleton";

const PlacehoderCategoryCard = () => {
    return (
        <div className="flex-grow-0 flex-shrink basis-auto flex flex-col max-w-full w-48 gap-2">
            <Skeleton className="w-full h-60"></Skeleton>
            <Skeleton className="w-full h-4"></Skeleton>
            <Skeleton className="w-full h-2"></Skeleton>
        </div>
    );
}


export { PlacehoderCategoryCard };