"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllBlogs } from "@/lib/utils";
import { LoadingSpinner } from "../loading-spinner";
import BlogCard from "../BlogCard";
import { Blog } from "@/types";
function AllBlogs() {


  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn:  fetchAllBlogs
  });

  
  console.log(data)


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
    
  
    </div>
  );
}

export default AllBlogs;
