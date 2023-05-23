'use client'
import { FC, useState } from 'react'
import { useForm } from "react-hook-form";
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Alert from '@mui/joy/Alert';
import useMutation from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image';

interface pageProps {
  
}


const page: FC<pageProps> = ({}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [signUpError, setSignUpError] = useState(false)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const postData = async function (user:any){
        console.log(user)
        const response = await fetch("api/signup",{
            method:'POST',
            body:JSON.stringify({user:{
                username: user.username,
                password: user.password,
                email: user.email,
            }}),
            headers:{
                'Content-type':'application/json; charset-UTF-8'
            }
        })
        return response.json()
    }
    

  return  <div className='flex h-screen max-h-screen '>
  <div className='w-3/6 flex flex-col justify-center relative aspect-square'>
    <Image src={"/banner_images/signup.jpg"} alt="Signup banner" fill objectFit='contain'  />
  </div>
  <div className='w-3/6 flex flex-col justify-center'>

    <form onSubmit={handleSubmit(postData)} className='w-4/6 flex flex-col m-auto gap-2 inline-block '>
      {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
      <div className='my-2'>
        <h1 className='m-0 text-4xl'>Get Started</h1>
        <p className='my-1 text-sm text-slate-400'>Already a Member? <a className='text-blue-500 no-underline' href='/signin'>Sign In</a></p>
        </div>
      <Input
        color="neutral"
        disabled={isLoading}
        placeholder="Username"
        size="lg"
        variant="soft"
        required
        fullWidth
        {...register("username")}
        className='MuiInput-input'
      />
      <Input
        color="neutral"
        disabled={isLoading}
        placeholder="Password"
        size="lg"
        variant="soft"
        type='password'
        required
        fullWidth
        {...register("password")}
      />
      <Input
        color="neutral"
        disabled={isLoading}
        placeholder="E-mail"
        size="lg"
        variant="soft"
        required
        fullWidth
        {...register("email")}
      />
      {/* <button type="submit">Sign in</button> */}
      <Button
        color="warning"
        disabled={isLoading}
        type='submit'
        variant="soft"
        size="lg"
        fullWidth
      >Sign Up</Button>
      {signUpError ? (
        <Alert
          color="danger"
          size="lg"
          variant="soft"
        >There is a problem with the Registration, please try again!</Alert>
      ) : null}
    </form>

  </div>
</div>
}

export default page