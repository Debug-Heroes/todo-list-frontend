import { AuthVerification } from "@/context/AuthVerification";
import { Outlet } from "react-router-dom";
export function AuthLayout() {
  return (
    <AuthVerification>
      <Outlet />
    </AuthVerification>
  )
}
