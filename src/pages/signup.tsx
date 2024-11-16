import Button from "@/components/Button/Button"
import { Input } from "@/components/Inputs/Input"
import { InputPasswordWithIcon } from "@/components/Inputs/InputPasswordWithIcon"
import { MessageError } from "@/components/Inputs/MessageError"
import { signUp } from "@/infra/http/users/sign-up"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
import { AxiosError } from "axios";

const SignUpSchema = z.object({
  name: z.string().min(1, { message: 'Please enter your name' }).trim(),
  email: z.string().email({ message: 'Please enter a valid email address' }).trim(),
  password: z.string().min(1, { message: 'Password cannot be empty' }).trim(),
  confirmPassword: z.string().min(1, { message: 'Confirm password cannot be empty' }).trim()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

type ISignUpSchema = z.infer<typeof SignUpSchema>

export function SignUp() {
  const navigate = useNavigate()
  const { handleSubmit, control, formState: { errors } } = useForm<ISignUpSchema>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      confirmPassword: '',
      email: '',
      name: '',
      password: ''
    }
  })

  const { mutate } = useMutation({
    mutationFn: (data: ISignUpSchema) => signUp({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    }),
    onSuccess(data, _, __) {
      toast.success("User registered successfully")
      navigate(`/sign-in?email=${data.email}`)
    },
    onError(error: AxiosError, _, __) {
      if (error.response?.status === 400) {
        toast.error(error.response.data as string)
        return
      }

      toast.error("Something went wrong. Please try again later")
    },
  })
  function handleSignUser(data: ISignUpSchema) {
    const { name, email, password, confirmPassword } = data;

    mutate({
      name, email, password, confirmPassword
    })
  }
  return (
    <div className="flex justify-center items-center h-screen p-1">
      <form onSubmit={handleSubmit(handleSignUser)} className="relative flex flex-col gap-4 w-full max-w-md shadow-xl bg-gray-100  rounded-md  p-8">
        <Link to={'/sign-in'} className="absolute top-2 left-2 duration-200 ease-in-out hover:-translate-x-1">
          <ArrowLeft size={20} />
        </Link>

        <Controller
          control={control}
          name="name"

          render={({ field }) => {
            return (
              <>
                <Input
                  label="Name"
                  id="name"
                  placeholder="Enter your name"
                  {...field}
                />
                <MessageError message={errors.name?.message} />
              </>
            )
          }}

        />
        <Controller
          control={control}
          name="email"

          render={({ field }) => {
            return (
              <>
                <Input
                  label="E-mail"
                  id="email"
                  placeholder="Enter your email"
                  {...field}
                />
                <MessageError message={errors.email?.message} />
              </>
            )
          }}

        />
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
        <Controller
          control={control}
          name="confirmPassword"

          render={({ field }) => {
            return (
              <>
                <InputPasswordWithIcon
                  title="Confirm password"
                  placeholder="Confirm your password"
                  {...field}
                />
                <MessageError message={errors.confirmPassword?.message} />
              </>
            )
          }}

        />
        <Button type="submit" label="Register" />
      </form>
    </div>
  )
}
