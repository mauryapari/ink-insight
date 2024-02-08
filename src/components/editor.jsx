"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import useSWR from 'swr'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogFormSchema } from "@/schema";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import Spinner from "./ui/spinner";
import { toast } from 'sonner';
import { createBlog } from "../../actions/blogs";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function BasicEditor() {
    const { data, error, isLoading } = useSWR('/api/category', fetcher);
    
    const form = useForm({
        resolver: zodResolver(BlogFormSchema),
        defaultValues: {
            catSlug: '',
            title: '',
            description: ''
        }
    });
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        }
    }
    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    const onSubmit = async (data) => {
        const res = await createBlog(data);
        if (res.error) {
            toast.error(res.error);
        } else {
            toast.success(res.success);
            form.reset();
        }
    }

    if (isLoading) {
        return (
            <div className="my-10 text-center">
                <Spinner/>
            </div>
        )
    }

    return (
        <div className='my-10'>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name="catSlug"
                            render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select a Category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {data?.map(item => (
                                                    <SelectItem key={item.id} value={item.slug}>{item.title}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Title" {...field} className="py-6 px-4  text-3xl" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <ReactQuill
                                            className="rounded-md border border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                            {...field}
                                            theme="bubble"
                                            onChange={(html) => field.onChange(html)}
                                            modules={modules}
                                            formats={formats}
                                            placeholder="Share your Thoughts!" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button size={"full"} className="shadow-md drop-shadow-sm text-md font-bold">Publish</Button>
                </form>
            </Form>
        </div >
    );
}
