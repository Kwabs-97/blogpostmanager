import { Blog } from "@/types";
import { db } from "../data/db";

const fetchBlogPosts = async () => {
    try {
        const allPosts = await db.posts.findAll();
        return allPosts;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
}

const createBlogPost = async (post: Blog) => {
    try {
        const newPost = await db.posts.create(post);
        return newPost;
    } catch (error) {
        console.error("Error creating blog post:", error);
        throw error;
    }
}

const updateBlogPost = async (id: number, post: Blog) => {
    try {
        const updatePost = await db.posts.update(id, post);
        return updatePost;
    } catch (error) {
        console.error("Error updating blog post:", error);
        throw error;
    }
}

const deleteBlogPost = async (id: number) => {
    try {
        const deletePost = await db.posts.delete(id);
        return deletePost;
    } catch (error) {
        console.error("Error deleting blog post:", error);
        throw error;
    }
}
export { fetchBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost };