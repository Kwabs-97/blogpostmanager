import fs from 'fs';
import path from 'path';

// Define the path to the db.json file
const dbPath = path.join(process.cwd(), 'src/app/api/data/db.json');


// Define the structure of a blog post
interface BlogPost {
    id: number;
    title: string;
    body: string;
    author: string;
    userId: number;
    category: string;
}

// Read the database file
function readDatabase(): { posts: BlogPost[] } {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
}

// Write to the database file
function writeDatabase(data: { posts: BlogPost[] }): void {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 4));
}

// Get all blog posts
export function getAllPosts(): BlogPost[] {
    const db = readDatabase();
    return db.posts;
}

// Get a single blog post by ID
export function getPostById(id: number): BlogPost | undefined {
    const db = readDatabase();
    return db.posts.find(post => post.id === id);
}

// Create a new blog post
export function createPost(newPost: Omit<BlogPost, 'id'>): BlogPost {
    const db = readDatabase();
    const id = db.posts.length > 0 ? db.posts[db.posts.length - 1].id + 1 : 1; 
    const post: BlogPost = { id, ...newPost };
    db.posts.push(post);
    writeDatabase(db);
    return post;
}

// Update a blog post by ID
export function updatePost(id: number, updatedPost: Partial<BlogPost>): BlogPost | undefined {
    const db = readDatabase();
    const post = getPostById(id);
    if (!post) return undefined; // Post not found

    const updated = { ...post, ...updatedPost };
    db.posts = db.posts.map(p => (p.id === id ? updated : p));
    writeDatabase(db);
    return updated;
}
// export function updatePost(id: number, updatedPost: Partial<BlogPost>): BlogPost | undefined {
//     const db = readDatabase();
//     const postIndex = db.posts.findIndex(post => post.id === id);
//     if (postIndex === -1) return undefined; // Post not found

//     const post = db.posts[postIndex];
//     db.posts[postIndex] = { ...post, ...updatedPost };
//     writeDatabase(db);
//     return db.posts[postIndex];
// }

// Delete a blog post by ID

export function deletePost(id: number): boolean {
    const db = readDatabase();
    const post = getPostById(id);
    if (!post) return false; // Post not found

    db.posts = db.posts.filter(p => p.id !== id);
    writeDatabase(db);
    return true;
}
// export function deletePost(id: number): boolean {
//     const db = readDatabase();
//     const initialLength = db.posts.length;
//     db.posts = db.posts.filter(post => post.id !== id);
//     if (db.posts.length === initialLength) return false; // No post was deleted
//     writeDatabase(db);
//     return true;
// }