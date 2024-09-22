'use client';

import { useEffect } from "react";
import { useSupabase } from "./use-supabse";
import { useAuthStore } from "@/stores/use-auth-store";


function useAuthStateSubscriber() {
    const setUser = useAuthStore((state) => state.setUser);
    const setIsCheckedAuth = useAuthStore((state) => state.setIsCheckedAuth);

    const supabase = useSupabase();
    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange((event, sesstion) => {
            console.log(event, sesstion);
            setUser(sesstion?.user || null);
            if (event === 'INITIAL_SESSION') {
                setIsCheckedAuth(true);
            }
        });
        return () => {
            data.subscription.unsubscribe();
        };

    }, [supabase]);
}

export { useAuthStateSubscriber };