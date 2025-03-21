import * as fs from 'fs';

// Define the structure of a blog post
interface BlogPost {
    id: number;
    title: string;
    body: string;
    author: string;
    userId: number;
    category: string;
}

// List of categories
const categories: string[] = [
    "Technology",
    "Health",
    "Travel",
    "Food",
    "Education",
    "Sports",
    "Finance",
    "Lifestyle",
    "Entertainment",
    "Science"
];

// Function to generate a random category
function getRandomCategory(): string {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

// Function to generate a single blog post
function generatePost(postId: number): BlogPost {
    return {
        id: postId,
        title: `Blog Post ${postId}`,
        body: `This is the body of blog post ${postId}. It contains some sample text.`,
        author: `Author ${postId}`,
        userId: Math.floor(Math.random() * 10) + 1, // Random user ID between 1 and 10
        category: getRandomCategory() // Random category
    };
}

// Generate 350 posts
const posts: BlogPost[] = [];
for (let i = 1; i <= 350; i++) {
    posts.push(generatePost(i));
}

// Create a JSON object with a "posts" key
const db = { posts };

// Write to db.json
fs.writeFileSync('db.json', JSON.stringify(db, null, 4));

console.log("db.json with 350 posts has been generated.");