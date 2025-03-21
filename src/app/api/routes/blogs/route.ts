import { NextResponse } from "next/server";
import { fetchBlogPosts } from "@/app/api/models/blog.model";

export async function GET() {
    try {
        const blogs = await fetchBlogPosts();
        if (blogs && blogs.length > 0) {
            return NextResponse.json({status: 200, body: blogs, message: "Blogs fetched successfully"});
        } else {
            return NextResponse.json({status: 404, body: [], message: "No blogs found"});
        }
    } catch(error){
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}
