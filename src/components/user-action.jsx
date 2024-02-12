"use client";

import { deleteBlogByID, unPublishBlogByID } from "../../actions/blogs";
import { Button } from "./ui/button";
import { FaDumpster, FaPen } from "react-icons/fa";
import Link from 'next/link';
import { toast } from 'sonner';
import { useState } from "react";
export const UserAction = ({id, isPublished}) => {

    const [isBlogPublished, setIsBlogPublished] = useState(isPublished);

    const handleMessage = (res) => {
        if(res.error) {
            toast.error(res.error)
        } else {
            toast.success(res.success)
        }
    }
    const handleBlogUnPublish = async () => {
        const data = !isPublished;
        const res = await unPublishBlogByID(data, id);
        if(res?.blog){
            isPublished = res?.blog?.published;
            setIsBlogPublished(res.blog.published);
        }
        handleMessage(res);
    };

    const handleBlogDeletion = async () => {
        const res = await deleteBlogByID(id);
        handleMessage(res);
    };

    return (
        <>
            < div className="flex justify-end items-center" >
                <Button
                    onClick={handleBlogUnPublish}
                    className="px-4 py-2 bg-primary text-secondary rounded-md mx-4"
                >
                    <FaPen className="mr-2"/>
                    {isBlogPublished ? 'UnPublish' : 'Publish'}
                </Button>
                <Link href={`/create`} className="flex items-center px-4 py-2 rounded-md bg-primary text-secondary">
                    <FaPen className="mr-2"/> Create</Link>

                <Button
                    className="px-4 py-2 bg-destructive rounded-md mx-4"
                    onClick={handleBlogDeletion}
                >
                    <FaDumpster className="mr-2" />
                    Delete
                </Button>
            </div >
        </>
    )
}