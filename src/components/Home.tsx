import React from 'react'
import AllBlogs from './blogs/AllBlogs'

function Home() {
  return (
    <div className='h-screen w-full overflow-hidden'>
      <div className='overflow-scroll'>

        <header>
            <h1>Blog App</h1>
        </header>
        <main className='h-[70%]'>
            <AllBlogs />
        </main>
        {/* <footer>
            <p>Blog App</p>
        </footer> */}
      </div>
    </div>
  )
}

export default Home