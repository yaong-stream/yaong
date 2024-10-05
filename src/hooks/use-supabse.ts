import { createClient } from "@/utils/supabase/client";
import { useMemo } from "react";

export type SupabaseClientType = ReturnType<typeof useSupabase>;

function useSupabase() {
    return useMemo(createClient, []);
}

export { useSupabase };