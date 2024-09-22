'use client';

import { useAuthStateSubscriber } from "@/hooks/user-auth-state-subsriber";
import { useAuthStore } from "@/stores/use-auth-store";

const AuthSubscriber = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const isCheckedAuth = useAuthStore(state => state.isCheckedAuth);
    useAuthStateSubscriber();

    return (
        <>
            {isCheckedAuth && children}
        </>
    );
};


export { AuthSubscriber };
