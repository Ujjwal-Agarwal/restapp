'use client'
import React from 'react'
import { FC,ReactNode } from 'react'
import {Toaster} from 'react-hot-toast'

interface Props {
    children: ReactNode
}

const Providers : FC<Props>= ({children}) => {
  return <>
  <Toaster position='bottom-center' reverseOrder={false} />
  {children}
  </>
}

export default Providers