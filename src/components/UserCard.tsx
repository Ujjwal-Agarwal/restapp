import Image from 'next/image'
import { FC } from 'react'
import Button from '@mui/joy/Button/Button'
import LogoutButton from './LogoutButton'


interface UserCardProps {
  userName: string|null|undefined,
  userImage: string|null|undefined,
}

const UserCard: FC<UserCardProps> = ({userName,userImage}) => {
    // console.log(userName,userImage)
  return <div className='w-11/12 h-2/6 bg-secondary-custom mx-auto rounded-2xl drop-shadow-2xl flex flex-col justify-between'>
    <div className='relative aspect-square'>
      <Image src={userImage || ''} fill alt="User Image" referrerPolicy='no-referrer' className='rounded-t-2xl' />
    </div>
    <p className='text-sm text-center text-slate-600 font-bold mt-2'>{userName}</p>

    <div className='flex justify-center p-4 pt-2'>
    <LogoutButton/>
    </div>



  </div>
}

export default UserCard