"use server";

import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(req) {
    try {
        const categories = await db.category.findMany({})

        if(!categories) {
            return NextResponse.json({ message: 'No Categories Found', code: 404 })
        }

        return NextResponse.json(categories)
        // return categories;
        // return NextResponse.json({...update, status:200}, {status: 200});

    } catch(err) {
        return NextResponse.json({message: err.message, status:500}, {status: 500});
    }
}