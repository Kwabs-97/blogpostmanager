import React from 'react'
import AllBlogs from './blogs/AllBlogs'

function Home() {
  return (
    <div className='h-screen w-full'>
        <header>
            <h1>Blog App</h1>
        </header>
        <main className='h-[70%]'>
            <AllBlogs />
        </main>
        <footer>
            <p>Blog App</p>
        </footer>
    </div>
  )
}

export default Home