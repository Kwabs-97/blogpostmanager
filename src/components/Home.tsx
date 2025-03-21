'use client'
import React from 'react'
import AllBlogs from './blogs/AllBlogs'
import { fetchAllBlogs } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn:  fetchAllBlogs
  });

  console.log(data)

  return (
    <div className='h-screen w-full overflow-hidden'>
      <div className='overflow-scroll'>

        <header>
            <h1>Blog App</h1>
        </header>
        <main className='h-[70%]'>
     
        </main>
     
      </div>
    </div>
  )
}

export default Home