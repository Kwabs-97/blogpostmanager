'use client'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

type TanstackQueryType  = {
    children?: React.ReactNode
}
const queryClient = new QueryClient;

function TanstackQueryClientProvider({children}:TanstackQueryType) {
  return (

    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
    
  )
}

export default TanstackQueryClientProvider