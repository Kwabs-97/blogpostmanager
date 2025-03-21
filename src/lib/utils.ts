import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchAllBlogs = async function() {
  try {
    const response = await fetch(`/api/routes/blogs`)
    const data = await response.json()
    if (data) return data
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}