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
import { PersonIcon } from "@radix-ui/react-icons";
import { SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
    FC,
    FormEvent,
    KeyboardEvent,
    PropsWithChildren,
    PropsWithoutRef,
    useState
} from "react";


export const MainHeader = () => {
    const { term } = useParams<{ term: string; }>();
    const router = useRouter();
    const onSearch = (keyword: string) => {
        router.push(`/search?term=${keyword}`);
    };

    return (
        <nav className="p-4 flex h-16 justify-between w-full bg-zinc-800">

            <div>
                <span>Icon</span>
                <Link href={'/browse'}
                    className="p-2 font-bold text-zinc-100 hover:text-pink-500 cursor-pointer">
                    Browse
                </Link>
            </div>

            <SearchInput searchKeyword={term ?? ''} onSearch={onSearch} />
            <div className="flex items-center gap-2">
                <Link href='/signin'>
                    <Button size='sm'>Login</Button>
                </Link>
                <Link href='/signup'>
                    <Button size='sm'>Sign up</Button>
                </Link>

                <UserPersonalDropDownMenu>
                    <PersonIcon className="size-6 text-gray-200 cursor-pointer" />
                </UserPersonalDropDownMenu>

            </div>
        </nav>
    );
};

type ISearchInput = {
    searchKeyword: string;
    onSearch: (keyword: string) => void;
};

const SearchInput: FC<PropsWithoutRef<ISearchInput>> = ({
    searchKeyword = '',
    onSearch
}) => {

    const [keyword, setKeyword] = useState<string>(searchKeyword);
    const hasKeyword = keyword.length > 0;

    const onChangeKeyword = (e: FormEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        setKeyword(value);
    }

    const onClear = () => {
        setKeyword('');
    };

    const onEnter = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSearch(keyword);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-zinc-800 p-2 text-zinc-50 border-[1px] rounded-sm has-[:focus]:border-2 border-pink-500">
                <input
                    className="rounded-sm focus-visible:outline-none bg-zinc-800"
                    type="text"
                    placeholder="Search"
                    value={keyword}
                    onKeyDown={onEnter}
                    onInput={(e) => onChangeKeyword(e)}
                />
                {hasKeyword ? <XIcon className="size-4 cursor-pointer" onClick={onClear} /> : null}
                <SearchIcon className="size-4" />
            </div>
        </div>
    );
}


const UserPersonalDropDownMenu: FC<PropsWithChildren> = ({ children }) => {
    // const logout = useAuthStore(state => state.logout);
    const onLogout = () => {
        // 서버에서 로그아웃 처리하고서 클라이언트 상태도 업데이트
        // logout();
    };

    // const userId = '1112322';
    // const { data } = useQuery({
    //     queryKey: ['userInfo', userId],
    //     queryFn: () => fetchUserInfo(userId),
    // });


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="p-2 rounded-sm hover:bg-zinc-500">
                    {children}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
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