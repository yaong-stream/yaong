import { SupabaseClientType, useSupabase } from "@/hooks/use-supabse";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Tables } from "@/types/supabase";

export type CategoryRow = Tables<'categories'>;

export function getRange(page: number, limit: number) {
    const from = page * limit;
    const to = from + limit - 1;

    return { from, to };
}


const queryKeys = {
    list: ['categories'] as const,
};

const queryOptions = {
    list: (client: SupabaseClientType) => ({
        queryKey: queryKeys.list,
        queryFn: async ({ pageParam }) => {

            const { from, to } = getRange(pageParam, 20);
            const { data } = await client
                .from('categories')
                .select()
                .range(from, to)
                .order('id', { ascending: false });

            return data;
        },
        initialPageParam: 0,

        getNextPageParam: (lastPage, allPages) => {
            const nextPage: number | undefined = lastPage?.length
                ? allPages?.length
                : undefined;

            return nextPage;
        },
    }),
};


const useGetCategories = () => {
    const client: SupabaseClientType = useSupabase();
    return useInfiniteQuery(queryOptions.list(client));
};


export { useGetCategories };

