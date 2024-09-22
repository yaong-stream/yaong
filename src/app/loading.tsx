import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // Stack uses React Suspense, which will render this page while user data is being fetched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  return <div>
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
  </div>;
}