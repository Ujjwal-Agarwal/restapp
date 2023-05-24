import { FC, ReactNode } from 'react'
import {authOptions} from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface LayoutProps {
    children: ReactNode
}
const Layout = async ({children}:LayoutProps) => {
    const session = await getServerSession(authOptions)
    console.log(session)
    if(!session) notFound()



  return <div className='bg-secondary-custom text-black w-full flex h-screen'>
    <div className='bg-accent-custom pt-5 px-5 flex h-full w-full max-w-[15%] grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white-px-6'>
        <Link href="/dash">
        <div className='flex gap-2 items-center justify-center'><p className='inline-block align-middle text-3xl font-extrabold text-secondary-button-custom'>restApp</p></div>
        </Link>
        <hr></hr>
    </div>

  </div>
}

export default Layout