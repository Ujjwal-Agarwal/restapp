import React from 'react'
// import { useSession } from "next-auth/react"
import { AuthOptions, Session, getServerSession } from 'next-auth';
import authOptions from '@/pages/api/auth/[...nextauth]';
import { getSession } from 'next-auth/react';

interface Props { }

const page = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const session= await useSession(GET)
  // const session = await getServerSession<AuthOptions,Session>(authOptions)
  // // console.log(session)
  // if(session?.user){
  //     return <>
  //     Signed in as {session.user.name}
  //     </>
  // }
  return <pre>
  </pre>
}

export default page