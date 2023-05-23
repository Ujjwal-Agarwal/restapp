'use client'
import React from 'react'
import { FC,ReactNode } from 'react'
import {Toaster} from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface Props {
    children: ReactNode
}

const Providers : FC<Props>= ({children}) => {
  return <SessionProvider>
  <Toaster position='bottom-center' reverseOrder={false} />
  {children}
  </SessionProvider>
}

export default Providers