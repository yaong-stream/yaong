'use client';

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut, 
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useSupabase } from "@/hooks/use-supabse";
import { useAuthStore } from "@/stores/use-auth-store";
import { PersonIcon } from "@radix-ui/react-icons";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    FC,
    PropsWithChildren
} from "react";
export const Header = () => {
    const user = useAuthStore(state => state.user);

    return (
        <nav className="p-4 flex h-16 justify-between w-full bg-zinc-800">

            <div>
                <span>Icon</span>
                <Link href={'/browse'}
                    className="p-2 font-bold text-zinc-100 hover:text-pink-500 cursor-pointer">
                    Browse
                </Link>
            </div>
            <div className="flex items-center gap-2">
                {
                    user ? <>
                        <UserPersonalDropDownMenu user={user}>
                            <PersonIcon className="size-6 text-gray-200 cursor-pointer" />
                        </UserPersonalDropDownMenu>
                    </> : <>
                        <Link href='/auth/signin'>
                            <Button size='sm'>Login</Button>
                        </Link>
                        <Link href='/auth/signup'>
                            <Button size='sm'>Sign up</Button>
                        </Link>
                    </>

                }
            </div>
        </nav>
    );
};


const UserPersonalDropDownMenu: FC<PropsWithChildren<{ user: User }>> = ({ children, user }) => {
    const client = useSupabase();
    const router = useRouter();
    const onLogout = () => {
        client.auth.signOut();
        router.refresh();
    };



    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="p-2 rounded-sm hover:bg-zinc-500">
                    {children}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                    My Account - {user.email}

                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>

                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout}>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );

};