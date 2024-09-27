'use client';

import { AutoCompleteInput } from "@/components/autocomplete-input/autocomplete-input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from 'zod';

const formSchema = z.object({
    title: z.string().min(1).max(100),
    category: z.array(z.string()),
    tags: z.array(z.string()),
    image: z.instanceof(FileList).optional(),
});


const StremeIiveSetting = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            category: [],
            tags: [],
            image: undefined,
        },
    });
    const imageRef = form.register("image");

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    };

    const tagList = [
        { name: '111', value: '111' },
        { name: '122', value: '122' },
        { name: '133', value: '133' },
    ];

    const onSelect = (item) => {
        console.log('item', item);
    };

    return (
        <div className="w-full p-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>방송 제목</FormLabel>
                                <FormControl>
                                    <Textarea maxLength={100} placeholder="제목을 작성해주세요." {...field} />
                                </FormControl>
                                <div className="text-right text-sm text-muted-foreground">
                                    {field.value.length} / 100
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        rules={{ required: false }}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>카테고리</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tags"
                        rules={{ required: false }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>태그</FormLabel>
                                <FormControl>
                                    <AutoCompleteInput data={tagList} onSelect={onSelect} />
                                </FormControl>
                                <div>
                                    
                                </div>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        rules={{ required: false }}
                        name="image"
                        render={() => (
                            <FormItem>
                                <FormLabel>이미지</FormLabel>
                                <FormControl>
                                    <Input type="file" placeholder="이미지를 업로드하세요" {...imageRef} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col items-end">
                        <Button type="submit">변경 저장</Button>
                    </div>

                </form>
            </Form>

        </div>
    );
};


export { StremeIiveSetting };
