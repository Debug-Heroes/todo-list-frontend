import { Menu } from "@/components/Menu/Menu";
import { AuthVerification } from "@/context/AuthVerification";
import { Outlet } from "react-router-dom";
export function AppLayout() {
  return (
    <AuthVerification>
      <div className="flex justify-center items-center w-full h-screen ">
        <Menu />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </AuthVerification>
  )
}
