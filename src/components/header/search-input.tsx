'use client';

import { SearchIcon, XIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, KeyboardEvent, useState } from "react";

const SearchInput = () => {

    const router = useRouter();
    const { term } = useParams<{ term: string; }>();
    const [keyword, setKeyword] = useState<string>(term || '');

    const hasKeyword = keyword?.length > 0;

    const onChangeKeyword = (e: FormEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        setKeyword(value);
    }

    const onSearch = (keyword: string) => {
        router.push(`/search?term=${keyword}`);
    };

    const onClear = () => {
        setKeyword('');
    };

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
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


export { SearchInput };

