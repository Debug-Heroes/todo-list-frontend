import Button from "@/components/Button/Button";
import { InputPasswordWithIcon } from "@/components/Inputs/InputPasswordWithIcon";
import { signIn } from "@/http/users/sign-in";
import { api } from "@/libs/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";


const UsersSignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
})

type UsersSignInSchemaForm = z.infer<typeof UsersSignInSchema>

export function SignIn() {
  const token = sessionStorage.getItem('token')

  const navigate = useNavigate()
  const { handleSubmit, register, control } = useForm<UsersSignInSchemaForm>({
    resolver: zodResolver(UsersSignInSchema),
    defaultValues: {
      password: '',
      email: ''
    }
  })

  const { mutate } = useMutation({
    mutationFn: ({ email,
      password }: UsersSignInSchemaForm) => signIn({
        email,
        password
      }),
    onSuccess(data, _, __) {
      api.defaults.headers.common = { 'Authorization': `bearer ${data}` }
      sessionStorage.setItem('token', data);
      navigate('/')
    },
  })

  function handleSubmitFromLogin(data: UsersSignInSchemaForm) {
    mutate({
      ...data
    })
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])
  return (
    <div className="w-full h-screen flex  justify-center items-center bg-gray-200 border  text-black p-1">
      <form onSubmit={handleSubmit(handleSubmitFromLogin)} className="flex flex-col gap-4 w-full max-w-sm shadow-xl bg-gray-100  rounded-md  p-8">
        <h2 className="text-2xl font-bold leading-2 py-4">Log in</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">E-mail</label>
          <input {...register('email')} placeholder="Enter your e-mail" className="rounded-sm p-2" id="email" type="email" />
        </div>
        <Controller
          control={control}
          name="password"

          render={({ field }) => {
            return (
              <InputPasswordWithIcon
                title="Password"
                placeholder="Enter your password"
                {...field}
              />
            )
          }}

        />

        <Link className="text-right text-sm text-red-900" to={'/recover-password'}>
          Forgot password
        </Link>
        <Button
          type="submit"
          label={'Log In'}
        />
      </form>
    </div>
  )
}
