import React from 'react'
import { LoadingSpinner } from '@/components/loading-spinner'

function loading() {
  return (
    <div className='flex justify-center items-center flex-row h-screen gap-2'>
        <LoadingSpinner />
        <p className='text-2xl font-bold'>Loading...</p>
    </div>
  )
}

export default loading