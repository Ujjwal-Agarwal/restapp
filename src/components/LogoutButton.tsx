'use client'
import { FC } from 'react'
import Button from '@mui/joy/Button/Button'
import { signOut } from 'next-auth/react'

interface LogoutButtonProps {
  
}

const LogoutButton: FC<LogoutButtonProps> = ({}) => {
  return <Button
  color="danger"
  onClick={function (){signOut()}}
  size="lg"
  variant="soft"
  className='w-11/12'
>SignOut</Button>
}

export default LogoutButton