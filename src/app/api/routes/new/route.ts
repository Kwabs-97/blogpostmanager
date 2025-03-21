import { NextResponse, NextRequest } from "next/server";
import { createBlogPost } from "../../models/blog.model";

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body)
    try {
        const newPost = await createBlogPost(body);
        return NextResponse.json({status: 200, body: newPost, message: "Blog post created successfully"});
    } catch(error){
        console.error("Error creating blog post:", error);
        return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 });
    }
}