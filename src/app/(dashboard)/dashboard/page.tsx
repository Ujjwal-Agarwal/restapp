import React from 'react'
// import { useSession } from "next-auth/react"
import { AuthOptions, Session, getServerSession } from 'next-auth';
import {GET} from '@/app/api/auth/[...nextauth]/route';
import { getSession } from 'next-auth/react';

interface Props {}

const page = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const session= await useSession(GET)
    const session = await getServerSession<AuthOptions,Session>(GET)
    // console.log(session)
    if(session){
        return <>
        Signed in as {session.user.name}
        </>
    }
  return <div>Dashboard</div>
}

export default page