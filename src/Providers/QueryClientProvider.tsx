'use client'
import React, { JSX } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

type TanstackQueryType  = {
    children?: JSX.Element
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