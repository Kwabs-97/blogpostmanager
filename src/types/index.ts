export type Blog = {
    id: number;
    title: string;
    body: string;
    author: string;
    createdAt?: string;
    updatedAt?: string;
    category: string[];
}

export type BlogFormData = {
    title: string;
    body: string;
    author: string;
    category: string[];
}