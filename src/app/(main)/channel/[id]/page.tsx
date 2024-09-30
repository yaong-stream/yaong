import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarHalfIcon, StarIcon } from "lucide-react";
import { ComponentPropsWithoutRef, FC } from "react";


export const ChannelTabsTrigger: FC<ComponentPropsWithoutRef<typeof TabsTrigger>> = ({ children, ...props }) => {
   return (
      <TabsTrigger className="text-lg font-extrabold rounded-none data-[state=active]:hover:text-pink-600 hover:text-pink-600 data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none" {...props}>{children}</TabsTrigger>
   );
};


export default function Page({ params }: { params: { id: string; } }) {

   // channel id channel-{params?.id}
   return (
      <div className="flex flex-col">
         <div className="flex p-20 w-full h-128 bg-zinc-500">
            <div className="px-8 pt-8 h-64 min-w-80 bg-gray-200">
               <Badge>오프라인</Badge>
               <h4 className="pt-2 scroll-m-20 text-xl font-semibold tracking-tight">
                  오프라인 상태입니다.
               </h4>
            </div>
         </div>
         <div className="flex flex-col pt-10 pb-12 px-12">
            <div className="flex flex-row gap-4 justify-between">
               <div className="flex gap-4">
                  <Avatar className="h-16 w-16">
                     <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                     <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                     <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        채널명
                     </h2>
                     <span>구독자수</span>
                  </div>
               </div>

               <div>
                  <Button size='sm'>
                     <StarIcon size='20' />
                     <span className="pl-2">구독하기</span>
                  </Button>
               </div>
            </div>

            <Tabs defaultValue="home" className="pt-12 w-full">
               <TabsList className="py-6 gap-4 bg-transparent">
                  <ChannelTabsTrigger value="home">홈</ChannelTabsTrigger>
                  <ChannelTabsTrigger value="video">동영상</ChannelTabsTrigger>
                  <ChannelTabsTrigger value="clip">클립</ChannelTabsTrigger>
               </TabsList>
               <TabsContent value="home">
                  <div className="flex flex-col gap-2 pt-4">
                     <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
                        채널 정보
                     </h5>
                     <div>
                        <span>구독자수: 999명</span>
                        <p className="leading-7 pt-2">
                           본 채널은 개발 방송을 위한 채널입니다.
                        </p>

                     </div>

                  </div>

               </TabsContent>
               <TabsContent value="video">
                  동영상 목록
               </TabsContent>
               <TabsContent value="clip">
               </TabsContent>
            </Tabs>
         </div>

      </div>
   );
}
