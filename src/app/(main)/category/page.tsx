import { useSupabaseServer } from "@/hooks/use-supabase-server";
import { queryOptions } from "@/services/category/queries";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Category } from "./_components/category";


export default async function CategoryPage() {
   const queryClient = new QueryClient();
   const supabaseClient = useSupabaseServer();

   await queryClient.prefetchInfiniteQuery(queryOptions.all(supabaseClient));

   const dehy = dehydrate(queryClient);
   return (
      <>
         <HydrationBoundary state={dehy}>
            <Category />
         </HydrationBoundary>
      </>
   );
}

