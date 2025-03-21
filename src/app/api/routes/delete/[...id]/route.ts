import { NextResponse, NextRequest } from "next/server";
import { deleteBlogPost } from "../../../models/model";

export async function GET(request: NextRequest) {
    try {
        const body = await request.json();
        const blog = deleteBlogPost(body.id);
        return NextResponse.json({status: 200, message: "Blog deleted successfully"});
    } catch(error){
        console.error("Error deleting blog:", error);
        return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
    }
}