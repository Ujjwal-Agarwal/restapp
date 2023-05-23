'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import Button from '@mui/joy/Button';

interface Props {}

const page = () => {
  return <Button variant='soft' className='mt-10 w-full' size="lg" onClick={() => signOut()}>Sign out</Button>
}

export default page