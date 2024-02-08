"use server";

import { db } from "@/lib/db";
import { auth } from "../auth"
import { createSlug } from "@/lib/utils";

export const createBlog = async (values) => {
    try {
        const session = await auth();
        console.log(session);
        if(!session) {
            throw new Error("Not Logged In");
        }

        const existingUser = await db.user.findUnique({
            where: {
                id: session.user.id,
            }
        })

        console.log(existingUser);
        if(!existingUser) {
            throw new Error('User Not found!')
        }

        await db.post.create({
            data: {
                ...values,
                slug: createSlug(values.title),
                createdAt: new Date(),
                views: 0,
                // published: true,
                userEmail: session.user.email,
            }
        })

        return {success: 'Post Created'}
    }catch(err) {
        console.log(err);
        return {error: err };
    }
}


export const getLatestPublishedBlogs = async () => {
    try {
        const blogs = await db.post.findMany({
            where: {
                published: true
            },
            take:10,
            orderBy: {
                createdAt: 'desc'
            }
        });
        console.log(blogs);
        return blogs;
    } catch(err) {
        return null
    }
}

export const getBlogsByUser = async() => {
    try {
        const session = await auth();
        if(!session) {
            throw new Error("Not Authenticated");
        }

        const existingUser = await db.user.findUnique({
            where: {
                id: session.user.id
            }
        })

        if(!existingUser) {
            throw new Error('No User Found');
        }

        if(existingUser.email !== session.user.email) {
            throw new Error('Email not Matching');
        }

        const userBlogs = await db.post.findMany({
            where: {
                userEmail: session.user.email
            }
        })

        return userBlogs;
    }catch(err) {
        return {error: err };
    }
}

export const getBlogsByCategory = async(id) => {
    try {
        const blogs = await db.post.findMany({
            where: {
                catSlug: id,
            },
            take:10,
            orderBy: {
                createdAt: 'desc'
            }
        })

        return blogs;
    } catch(err) {
        return {error: err}
    }
}