'use client'
import { FC, useState } from 'react'
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast'
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Alert from '@mui/joy/Alert';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [signInError, setSignInError] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  async function loginWithCredentials(props: any) {
    // console.log("props", props.username, props.password)
    setIsLoading(true)
    try {
      setSignInError(false)
      const status = await signIn("credentials", {
        username: props.username, password: props.password
        , redirect: false, callbackUrl: '/dashboard'
      })
      console.log(status)

      if (status?.url) {
        router.push(status.url);
      } else {
        setSignInError(true);
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }


  return <div className='flex h-screen max-h-screen '>
    <div className='w-3/6 flex flex-col justify-center relative aspect-square'>
      <Image src={"/banner_images/signup.jpg"} alt="Signup banner" fill objectFit='contain' />
    </div>
    <div className='w-3/6 flex flex-col justify-center'>

      <form onSubmit={handleSubmit(loginWithCredentials)} className='w-4/6 flex flex-col m-auto gap-2 inline-block '>
        {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
        <div className='my-2'>
          <h1 className='m-0 text-4xl'>Login</h1>
          <p className='my-1 text-sm text-slate-400'>Not a Member? <a className='text-blue-500 no-underline' href='/signup'>Sign Up</a></p>
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
          sx={(theme) => ({
            borderRadius: `15px`,
          })}
        />
        <Input
          color="neutral"
          disabled={isLoading}
          placeholder="Password"
          size="lg"
          variant="soft"
          type="password"
          required
          fullWidth
          sx={(theme) => ({
            borderRadius: `15px`,
          })}
          {...register("password")}
        />
        {/* <button type="submit">Sign in</button> */}
        <Button
          color="success"
          disabled={isLoading}
          type='submit'
          variant="soft"
          size="lg"
          fullWidth
          sx={(theme) => ({
            borderRadius: `15px`,
          })}
        >Sign In</Button>
        {signInError ? (
          <Alert
            color="danger"
            size="lg"
            variant="soft"
          >There is a problem with the Username/Password</Alert>
        ) : null}
      </form>

    </div>
  </div>
}

export default page