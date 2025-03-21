import { Blog, BlogFormData } from "@/types";
import { generateRandomAuthor } from "../data/genRandAuthor";

// In-memory store for blog posts
let blogPosts: Blog[] = [];

// Fetch initial blog posts
export const fetchBlogPosts = async () => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Transform the data to match Blog type
        blogPosts = data.map((post: any) => ({
            id: post.id,
            title: post.title,
            body: post.body,
            author: generateRandomAuthor(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            category: []
        }));
        
        return blogPosts;
    } catch (error) {
      
        console.error("Error fetching blog posts:", error);
        throw error;
    }
};

// Get all blog posts
// export const getAllBlogPosts = () => blogPosts;

// Add new blog post
export const addBlogPost = (blogData: BlogFormData) => {
    const newBlog: Blog = {
        id: blogPosts.length + 1,
        title: blogData.title,
        body: blogData.body,
        author: blogData.author,
        category: blogData.category,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    blogPosts.push(newBlog);
    return newBlog;
};

// Update existing blog post
export const updateBlogPost = (id: number, blogData: Partial<Blog>) => {
    const index = blogPosts.findIndex(post => post.id === id);
    if (index === -1) throw new Error("Blog post not found");
    
    blogPosts[index] = {
        ...blogPosts[index],
        ...blogData,
        updatedAt: new Date().toISOString()
    };
    
    return blogPosts[index];
};

// Delete blog post
export const deleteBlogPost = (id: number) => {
    const index = blogPosts.findIndex(post => post.id === id);
    if (index === -1) throw new Error("Blog post not found");
    
    blogPosts = blogPosts.filter(post => post.id !== id);
    return true;
};
