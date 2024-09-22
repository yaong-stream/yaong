import { useQuery } from "@tanstack/react-query";
import { useSupabase } from "./use-supabse";



function useCurrentUserQuery() {
    const client = useSupabase();

    const queryKey = ['currentUser'];
    const queryFn = async () => client.auth.getUser();
    return useQuery({
        queryKey,
        queryFn,
    });
}

export { useCurrentUserQuery };