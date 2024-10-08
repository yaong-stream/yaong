import { SupabaseClientType, useSupabase } from "@/hooks/use-supabse";
import { Tables } from "@/types/supabase";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export type CategoryRow = Tables<'categories'>;

export function getRange(page: number, limit: number) {
    const from = page * limit;
    const to = from + limit - 1;

    return { from, to };
}


const queryKeys = {
    all: ['categories'] as const,
    detail: (id: string) => [...queryKeys.all, id] as const,
};

const queryOptions = {
    all: (client: SupabaseClientType) => ({
        queryKey: queryKeys.all,
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
    detail: (client: SupabaseClientType, id: string) => ({
        queryKey: queryKeys.detail(id),
        queryFn: async () => {
            const { data } = await client
                .from('categories')
                .select().eq('id', id);

            return data;
        },
    })
};


const useGetCategories = () => {
    const client: SupabaseClientType = useSupabase();
    return useInfiniteQuery(queryOptions.all(client));
};


const useGetCategory = (id: string) => {
    const client: SupabaseClientType = useSupabase();
    return useQuery(queryOptions.detail(client, id));
};



export { useGetCategories, useGetCategory };

