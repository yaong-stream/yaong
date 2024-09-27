'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { useToast } from "@/hooks/use-toast";
import { useRef } from "react";



export default function StreamingSettingPage() {

    // query streaming-setting

    const streamUrlRef = useRef<HTMLInputElement>(null);
    const { toast } = useToast();
    const { copyToClipboard } = useCopyToClipboard({
        onCopy() {
            toast({
                description: "복사되었습니다.",
            });
        },
    });

    const onCopy = () => {
        const streamUrl = streamUrlRef.current?.value;
        copyToClipboard(streamUrl || '');
    };
    const onRefresh = () => {
        // mutate action


        toast({
            description: "스트리밍 키가 갱신되었습니다.",
        });
    };

    return (

        <div className="p-10 flex flex-col gap-4">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                스트리밍 설정
            </h4>
            <Card>
                <CardContent className="p-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Label htmlFor="stream-url" className="min-w-32">스트림 URL</Label>
                            <Input id="stream-url" type="text" ref={streamUrlRef} readOnly />
                            <Button onClick={onCopy}>Copy</Button>
                        </div>
                        <div className="flex items-center gap-2">
                            <Label htmlFor="stream-key" className="min-w-32">스트림 키</Label>
                            <Input id="stream-key" type="text" readOnly />
                            <Button onClick={onCopy}>Copy</Button>
                            <Button onClick={onRefresh}>Refresh</Button>
                        </div>
                        <div className="flex items-center gap-2">
                            <Label className="min-w-32">지연 시간 모드</Label>
                            <RadioGroup defaultValue="option-one">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-one" id="option-one" />
                                    <Label htmlFor="option-one">짧은 지연 시간</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-two" id="option-two" />
                                    <Label htmlFor="option-two">일반적인 지연 시간</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}