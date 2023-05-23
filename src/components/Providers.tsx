'use client'
import React from 'react'
import { FC,ReactNode } from 'react'
import {Toaster} from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'

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