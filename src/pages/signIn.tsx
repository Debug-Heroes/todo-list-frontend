import Button from "@/components/Button/Button";
import { InputPasswordWithIcon } from "@/components/Inputs/InputPasswordWithIcon";
import { MessageError } from "@/components/Inputs/MessageError";
import { Loading } from "@/components/Loading/Loading";
import { signIn } from "@/infra/http/users/sign-in";
import { api } from "@/libs/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";

import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";


const UsersSignInSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }).trim(),
  password: z.string().min(1, { message: "Password cannot be empty" }).trim(),
})

type UsersSignInSchemaForm = z.infer<typeof UsersSignInSchema>

export function SignIn() {

  const navigate = useNavigate()
  const { handleSubmit, register, control, formState: {
    errors
  } } = useForm<UsersSignInSchemaForm>({
    resolver: zodResolver(UsersSignInSchema),
    defaultValues: {
      password: '',
      email: ''
    }
  })

  const { mutate, isLoading } = useMutation<string, AxiosError, UsersSignInSchemaForm>({
    mutationFn: ({ email,
      password }: UsersSignInSchemaForm) => {
      return signIn({
        email,
        password
      })
    },
    onSuccess(data, _, __) {
      api.defaults.headers.common = { 'Authorization': `bearer ${data}` }
      sessionStorage.setItem('token', data);
      navigate('/')
    },
    onError(error: AxiosError, variables, context) {
      if (error.response?.status === 401) {
        toast.error('Email or password incorrect')
      } else {
        toast.error("Unknown error occurred")
      }


    }
  })

  function handleSubmitFromLogin(data: UsersSignInSchemaForm) {
    mutate({
      ...data
    })
  }


  return (
    <div className="w-full h-screen flex  justify-center items-center bg-gray-200 border  text-black p-1">
      <form onSubmit={handleSubmit(handleSubmitFromLogin)} className="flex flex-col gap-4 w-full max-w-md shadow-xl bg-gray-100  rounded-md  p-8">
        <h2 className="text-2xl font-bold leading-2 py-4">Log in</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">E-mail</label>
          <input {...register('email')} placeholder="Enter your e-mail" className="rounded-sm p-2" id="email" type="email" />
        </div>
        <MessageError message={errors.email?.message} />

        <Controller
          control={control}
          name="password"

          render={({ field }) => {
            return (
              <>
                <InputPasswordWithIcon
                  title="Password"
                  placeholder="Enter your password"
                  {...field}
                />
                <MessageError message={errors.password?.message} />
              </>
            )
          }}

        />
        <div className="flex justify-between items-center text-xs gap-2">
          <div className="flex gap-1 items-center">
            <p>
              Don't have an account?
            </p>
            <Link className="relative after:w-0 after:hover:w-full after:transition-all ease-in-out duration-150 after:h-[1px] after:bg-blue-500 after:absolute after:-bottom-1 after:left-0" to={'/sign-up'}>
              Sign up here.
            </Link>
          </div>
          <Link className="text-right text-sm text-red-900" to={'/recover-password'}>
            Forgot password
          </Link>
        </div>

        <Button
          disabled={isLoading}
          type="submit"
          label={isLoading ? <Loading /> : 'Log In'}
        />
      </form>
    </div>
  )
}
