"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var genRandAuthor_1 = require("./genRandAuthor");
// List of categories
var categories = [
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
function getRandomCategory() {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}
// Function to generate a single blog post
function generatePost(postId) {
    return {
        id: postId,
        title: "Blog Post ".concat(postId),
        body: "This is the body of blog post ".concat(postId, ". It contains some sample text."),
        author: (0, genRandAuthor_1.generateRandomAuthor)(),
        userId: Math.floor(Math.random() * 10) + 1, // Random user ID between 1 and 10
        category: getRandomCategory() // Random category
    };
}
// Generate 350 posts
var posts = [];
for (var i = 1; i <= 350; i++) {
    posts.push(generatePost(i));
}
// Create a JSON object with a "posts" key
var db = { posts: posts };
// Write to db.json
fs.writeFileSync('db.json', JSON.stringify(db, null, 4));
console.log("db.json with 350 posts has been generated.");
