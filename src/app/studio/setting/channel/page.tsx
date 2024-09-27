import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";



export default function ChannelSettingPage() {
    return (


        <div className="p-10 flex flex-col gap-4">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                채널 프로필 설정
            </h4>
            <Card>
                <CardContent className="p-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Label htmlFor="channel-name" className="min-w-32">이름</Label>
                            <Input id="channel-name" type="text" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Label htmlFor="channel-desc" className="min-w-32">설명</Label>
                            <Textarea id="channel-desc" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}