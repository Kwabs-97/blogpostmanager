import { Blog } from "@/types";
import { db } from "../data/db";

const fetchBlogPosts = async () => {
    try {
        const allPosts = db.posts.findAll();
        return allPosts.slice(0,100);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
}

const createBlogPost = async (post: Blog) => {
    try {
        const newPost = db.posts.create(post);
        return newPost;
    } catch (error) {
        console.error("Error creating blog post:", error);
        throw error;
    }
}

const updateBlogPost = async (id: number, post: Blog) => {
    try {
        const updatePost = db.posts.update(id, post);
        return updatePost;
    } catch (error) {
        console.error("Error updating blog post:", error);
        throw error;
    }
}

const deleteBlogPost = async (id: number) => {
    try {
        const deletePost = db.posts.delete(id);
        return deletePost;
    } catch (error) {
        console.error("Error deleting blog post:", error);
        throw error;
    }
}
export { fetchBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost };