import React from "react";
import { Blog } from "@/types";
interface BlogCardProps {
  blogs: Blog;
}


function BlogCard({ blogs }: BlogCardProps) {

  console.log(blogs)
  return (
    <div className="flex flex-col  justify-center gap-5 border border-gray-300 rounded-md py-2 px-2">
      <div>
        <div className="flex flex-row gap-2">
          <h2>Title:</h2>
          <p>{blogs.title}</p>
        </div>
        <div className="flex flex-row gap-2">
          <h2>Body:</h2>
          <p>{blogs.body}</p>
        </div>
        
      </div>
      <div>
      {/* <div className="flex flex-row gap-2">
          <h2>Author:</h2>
          <p>{blogs.title}</p>
        </div> */}
      </div>
    </div>
  );
}

export default BlogCard;
