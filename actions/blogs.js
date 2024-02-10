"use server";

import { db } from "@/lib/db";
import { auth } from "../auth"
import { createSlug } from "@/lib/utils";

export const createBlog = async (values) => {
    try {
        const session = await auth();
        // console.log(session);
        if(!session) {
            throw new Error("Not Logged In");
        }

        const existingUser = await db.user.findUnique({
            where: {
                id: session.user.id,
            }
        })

        // console.log(existingUser);
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
        // console.log(err);
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
        // console.log(blogs);
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

export const getBlogBySlug = async(id) => {
    try {
        if(!id) {
            throw new Error("ID not provided");
        }
        const data =  await db.post.findUnique({
            where:{
                slug: id
            }
        })
        return data

    }catch(err) {
        return {error: err}
    }
}

export const updateBlogByID = async(data, postID) => {
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
            throw new Error("No user Found");
        }

        const updatedBlog = await db.post.update({
            where: {
                id: postID,
            },
            data: {
                ...data
            }
        })
        
        return {success: 'Update Successful', blog:updatedBlog};
    } catch(err) {
        return {error: err}
    }
}

export const deleteBlogByID = async(postID) => {

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
            throw new Error("No user Found");
        }

        const deletedBlog = await db.post.delete({
            where: {
                id: postID,
            }
        })
        
        return {success: 'Deletion Successful', blog:deletedBlog};
    } catch(err) {
        return {error: err}
    }
}

export const unPublishBlogByID = async (data, postID) => {

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
            throw new Error("No user Found");
        }

        const updatedBlog = await db.post.update({
            where: {
                id: postID,
            },
            data: {
                published: data
            }
        })
        
        return {success: 'Unpublish Successful', blog:updatedBlog};
    } catch(err) {
        return {error: err}
    }
}