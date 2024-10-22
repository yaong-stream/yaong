import { createClientServer } from "@/utils/supabase/server";


export type SupabaseClientServerType = ReturnType<typeof useSupabaseServer>;

const useSupabaseServer = () => {
    return createClientServer();
};

export { useSupabaseServer };