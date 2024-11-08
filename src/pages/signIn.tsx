import Button from "@/components/Button/Button";
import { InputPasswordWithIcon } from "@/components/Inputs/InputPasswordWithIcon";
import { Link } from "react-router-dom";




export function SignIn() {
  return (
    <div className="w-full h-screen flex  justify-center items-center bg-gray-200 border  text-black p-1">
      <form className="flex flex-col gap-4 w-full max-w-sm shadow-xl bg-gray-100  rounded-md  p-8">
        <h2 className="text-2xl font-bold leading-2 py-4">Log in</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">E-mail</label>
          <input placeholder="Enter your e-mail" className="rounded-sm p-2" id="email" type="email" />
        </div>
        <InputPasswordWithIcon
          title="Password"
          placeholder="Enter your password"
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
