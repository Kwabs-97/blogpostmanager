import { Blog, BlogFormData } from "@/types";

export async function getBlogs() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
}

export async function createBlog(blog: BlogFormData) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(blog),
        });
    } catch(error){
        console.error("Error creating blog:", error);
        throw error;
    }
};

export async function updateBlog(blog: Blog) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${blog.id}`, {
            method: "PUT",
            body: JSON.stringify(blog),
        });
    } catch(error){
        console.error("Error updating blog:", error);
        throw error;
    }
};

export async function deleteBlog(id: number) {
    try {
        
    } catch(error){
        console.error("Error deleting blog:", error);
        throw error;
    }
};