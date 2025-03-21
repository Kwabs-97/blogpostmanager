import { NextResponse, NextRequest } from "next/server";
import { updateBlogPost } from "../../models/model";

export async function GET(request: NextRequest) {
    try {
        const body = await request.json();
        const blog = updateBlogPost(body.id, body);
        console.log(body)
        return NextResponse.json({status: 200, message: "Blog updated successfully"});
    } catch(error){
        console.error("Error updating blog:", error);
        return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
    }
}