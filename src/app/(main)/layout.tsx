import { ScrollArea } from "@/components/ui/scroll-area";
import { stackServerApp } from "@/stack";
import Image from "next/image";
import { MainHeader } from "./_components/main-header";
import { SideNavMenu } from "./_components/side-nav-menu";

export default async function Layout({ children }: {
  children: React.ReactNode
}) {
  const user = await stackServerApp.getUser();

  return (
    <div className="block w-full min-h-full">
      <div>{user?.displayName}</div>
      {user?.profileImageUrl ? <Image src={user.profileImageUrl} alt="user profile" width={100} height={100} /> : null}

      <div className="flex flex-col h-full w-full">
        <MainHeader />
        <div className="flex w-full h-[calc(100vh-4.5rem)]">
          <SideNavMenu />
          <main className="h-full w-full border-red-800 border-2">
            <ScrollArea >
              {children}
            </ScrollArea>
          </main>
        </div>
      </div>

    </div>
  );
}
