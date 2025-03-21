interface BlogPost {
    id: number;
    title: string;
    body: string;
    author: string;
    userId: number;
}

import { generateRandomAuthor } from './genRandAuthor';

function generateDummyPosts(count: number): BlogPost[] {
    const posts: BlogPost[] = [];
    
    for (let i = 1; i <= count; i++) {
        posts.push({
            id: i,
            title: `Blog Post ${i}`,
            body: `This is the content of blog post ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            author: generateRandomAuthor(),
            userId: Math.floor(Math.random() * 10) + 1
        });
    }
    
    return posts;
}

// Generate 350 posts
const blogPosts = generateDummyPosts(350);

// Export functions to interact with the "database"
export const db = {
    posts: {
        findAll: () => blogPosts,
        findById: (id: number) => blogPosts.find(post => post.id === id),
        findByUserId: (userId: number) => blogPosts.filter(post => post.userId === userId),
        create: (post: Omit<BlogPost, 'id'>) => {
            const newPost = {
                ...post,
                id: blogPosts.length + 1
            };
            blogPosts.push(newPost);
            return newPost;
        },
        update: (id: number, updates: Partial<BlogPost>) => {
            const index = blogPosts.findIndex(post => post.id === id);
            if (index !== -1) {
                blogPosts[index] = { ...blogPosts[index], ...updates };
                return blogPosts[index];
            }
            return null;
        },
        delete: (id: number) => {
            const index = blogPosts.findIndex(post => post.id === id);
            if (index !== -1) {
                return blogPosts.splice(index, 1)[0];
            }
            return null;
        }
    }
};
