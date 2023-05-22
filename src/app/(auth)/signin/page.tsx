'use client'
import { FC } from 'react'
import {signIn} from "next-auth/react"
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  async function loginWithCredentials(props:any){
    // console.log("props",props.username,props.password)
    try{
      await signIn("credentials", { username: props.username, password: props.password })
    }catch(error){
      toast.error("Something went wrong")
    }
  }


  return <div>
    <form onSubmit={handleSubmit(loginWithCredentials)}>
      {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
      <label>
        Username
        <input type="text" {...register("username")} />
      </label>
      <label>
        Password
        <input type="password" {...register("password")} />
      </label>
      <button type="submit">Sign in</button>
    </form>
  </div>
}

export default page