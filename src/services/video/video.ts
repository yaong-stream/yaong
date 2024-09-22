import { useSupabase } from "@/hooks/use-supabse";
import { SupabaseClient } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";


const queryKeys = {
    all: ['videos'] as const,
    detail: (videoId: string) => [...queryKeys.all, videoId] as const,
};

const queryOptions = {
    all: (client: SupabaseClient) => ({
        queryKey: queryKeys.all,
        queryFn: async () => await client.from('notes').select(),
    }),
    // detail: (photoId: string) => ({
    //     queryKey: queryKeys.detail(photoId),
    //     queryFn: (client: SupabaseClient) => client.getPhoto(photoId),
    // }),
};


const useGetVideos = () => {
    const client = useSupabase();
    return useQuery(queryOptions.all(client));
};


export { useGetVideos };

