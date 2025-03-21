import { NextResponse, NextRequest } from "next/server";
import { addBlogPost } from "../../models/model";

export async function GET(request: NextRequest) {
const body = await request.json();
console.log(body)
    try {
        // const blogs = addBlogPost();
        return NextResponse.json({status: 200, message: "Blogs fetched successfully"});
    } catch(error){
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}
