import { NextResponse } from "next/server";
import {fetchBlogPosts} from "../../models/model";

export async function GET() {
    try {
        const blogs = await fetchBlogPosts();
        return NextResponse.json({status: 200, body: blogs, message: "Blogs fetched successfully"});
    } catch(error){
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}
