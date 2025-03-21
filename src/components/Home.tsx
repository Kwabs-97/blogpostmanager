"use client";
import React from "react";
import AllBlogs from "./blogs/AllBlogs";
import { fetchAllBlogs } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./tables/data-table";
import columns from "./tables/columns";
import { LoadingSpinner } from "./loading-spinner";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
function Home() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchAllBlogs,
  });

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="overflow-scroll h-full px-6 flex flex-col gap-4">
        <header>
          <h1>Blog App</h1>
        </header>
        <main className={`h-[75%] flex flex-col gap-4  justify-center `}>
          {isLoading && <LoadingSpinner />}
          {isError && <div>{`Error fetching blogs ${error.message}`} </div>}
          <div className="flex flex-row justify-between items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              name="search"
              placeholder="Search all columns..."
              className="pl-8"
            />
          </div>
          <Button className="bg-blue-500 text-white rounded-sm">Create Blog</Button>

          </div>
          <DataTable columns={columns} data={data} />
        </main>
      </div>
    </div>
  );
}

export default Home;
