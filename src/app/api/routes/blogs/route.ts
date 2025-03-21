import { NextResponse } from "next/server";
import { getAllPosts } from "../../models/model";

export async function GET() {
    try {
        const blogs = getAllPosts()
        return NextResponse.json({status: 200, data: blogs});
    } catch(error){
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}
