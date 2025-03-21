import fs from 'fs';
import path from 'path';

import axios from 'axios';



const authors = [
    "John Smith",
    "Emma Wilson", 
    "Michael Brown",
    "Sarah Davis",
    "James Miller",
    "Lisa Anderson",
    "David Taylor",
    "Jennifer Thomas",
    "Robert Martin",
    "Jessica White"
];

export function generateRandomAuthor(): string {
    const randomIndex = Math.floor(Math.random() * authors.length);
    return authors[randomIndex];
}


