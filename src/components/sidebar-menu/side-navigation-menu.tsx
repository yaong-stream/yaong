import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const SideNavigationMenu: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ul className="p-4 flex flex-col gap-4 m-0">
            {children}
        </ul>
    );
};

type ISideNavigationMenuItem = PropsWithChildren<{
    url?: string,
}>;

const SideNavigationMenuItem: FC<ISideNavigationMenuItem> = ({ children, url }) => {

    return (
        <li>
            {url ?
                <>
                    <Link href={url}>
                        <div className="flex flex-row items-center gap-4 font-bold">
                            {children}
                        </div>
                    </Link>
                </>
                : <>
                    <div className="flex flex-row items-center gap-4 font-bold">
                        {children}
                    </div>
                </>
            }

        </li>
    );
};



export { SideNavigationMenu, SideNavigationMenuItem };