// import { Blog } from '@/types';
// import { generateRandomAuthor } from './genRandAuthor';

// async function generateDummyPosts(count: number): Promise<Blog[]> {
//     // Fetch posts from JSONPlaceholder
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const jsonPosts = await response.json();
    
    
//     // Add random authors to existing posts
//     const existingPosts: Blog[] = jsonPosts.map((post: any) => ({
//         ...post,
//         author: generateRandomAuthor()
//     }));

//     const additionalPosts: Blog[] = [];
//     for (let i = 100; i <= count; i++) {
//         additionalPosts.push({
//             id: i,
//             title: `Blog Post ${i}`,
//             body: `This is the content of blog post ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
//             author: generateRandomAuthor(),
//             createdAt: new Date().toISOString(),
//             updatedAt: new Date().toISOString(),
//             category: []
//         });
//     }
    
//     return [...existingPosts, ...additionalPosts];
// }

// // Initialize empty array for posts
// let blogPosts: Blog[] = [];

// // Initialize the database
// export async function initializeDb() {
//     blogPosts = await generateDummyPosts(350);
// }

// initializeDb();

// // Export functions to interact with the "database"
// export const db = {
//     posts: {
//         findAll: () => blogPosts,
//         findById: (id: number) => blogPosts.find(post => post.id === id),
//         create: (post: Omit<Blog, 'id'>) => {
//             const newPost = {
//                 ...post,
//                 id: blogPosts.length + 1
//             };
//             blogPosts.push(newPost);
//             return newPost;
//         },
//         update: (id: number, updates: Partial<Blog>) => {
//             const index = blogPosts.findIndex(post => post.id === id);
//             if (index !== -1) {
//                 blogPosts[index] = { ...blogPosts[index], ...updates };
//                 return blogPosts[index];
//             }
//             return null;
//         },
//         delete: (id: number) => {
//             const index = blogPosts.findIndex(post => post.id === id);
//             if (index !== -1) {
//                 return blogPosts.splice(index, 1)[0];
//             }
//             return null;
//         }
//     }
// };

