"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllBlogs } from "@/lib/utils";
import { LoadingSpinner } from "../loading-spinner";
import BlogCard from "../BlogCard";
import { Blog } from "@/types";
function AllBlogs() {
async function fetchBlogs(){
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!response.ok){
      return null;
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error)
  }
}

  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn:  fetchBlogs
  });

  


  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">
        Fetching Blogs <LoadingSpinner />
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-full">
        <p>Error fetching blogs</p>
      </div>
    );

  return (
    <div className="w-full px-4 py-4">
      {
        data.slice(0,10).forEach((blog:Blog)=>{
          return <BlogCard blogs={blog} />
        })
      }
  
    </div>
  );
}

export default AllBlogs;
