
import { User } from "@supabase/supabase-js";
import { create } from "zustand";



type AuthUser = User | null;


interface AuthStore {
    user: AuthUser;
    setUser: (user: AuthUser) => void;
    signIn: (user: AuthUser) => void;
    signOut: () => void;
    isCheckedAuth: boolean;
    setIsCheckedAuth: (isCheckedAuth: boolean) => void;
}



const useAuthStore = create<AuthStore>(
    (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        signIn: (user) => {
            // const { user, error } = await supabase.auth.signIn({ email, password });
            // if (error) throw error;
            set({ user });
        },
        signOut: () => {
            // const { error } = await supabase.auth.signOut();
            // if (error) throw error;
            set({ user: null });
        },
        isCheckedAuth: false,
        setIsCheckedAuth: (isCheckedAuth) => {
            set({ isCheckedAuth });
        },
    })
);


export { useAuthStore };