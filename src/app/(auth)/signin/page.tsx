'use client'
import { FC, useState } from 'react'
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast'
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';



interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  async function loginWithCredentials(props: any) {
    // console.log("props", props.username, props.password)
    setIsLoading(true)
    try {
      await signIn("credentials", { username: props.username, password: props.password })
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }


  return <div className='flex items-center justify-center mt-10'>
    <form onSubmit={handleSubmit(loginWithCredentials)} className='w-3/6 flex flex-col gap-2'>
      {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
      <label>
        {/* Username */}
        {/* <input type="text" {...register("username")}  /> */}
        <Input
          color="neutral"
          disabled={isLoading}
          placeholder="Username"
          size="md"
          variant="soft"

          {...register("username")}
        />
      </label>
      <label>
        {/* Password */}
        {/* <input type="password" {...register("password")} /> */}
        <Input
          color="neutral"
          disabled={isLoading}
          placeholder="Password"
          size="md"
          variant="soft"

          {...register("password")}
        />
      </label>
      {/* <button type="submit">Sign in</button> */}
      <Button
        color="success"
        disabled={isLoading}
        type='submit'
        variant="outlined"
        size="lg"
      >Sign In</Button>
    </form>
  </div>
}

export default page