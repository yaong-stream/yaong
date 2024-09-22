import { ScrollArea } from "@/components/ui/scroll-area";
import { Header } from "./_components/header/header";
import { SideNavMenu } from "./_components/side-nav-menu";

export default async function Layout({ children }: {
  children: React.ReactNode
}) {

  return (
    <div className="block w-full min-h-full">
      <div className="flex flex-col h-full w-full">
        <Header />
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
