import { Menu } from "@/components/Menu/Menu";
import { AuthVerification } from "@/context/AuthVerification";
import { ShowMenuMobileProvider } from "@/context/ShowMenuMobile";
import { Outlet } from "react-router-dom";
export function AppLayout() {
  return (
    <AuthVerification>
      <ShowMenuMobileProvider>
        <div className="flex justify-center bg-red-700 items-center w-full h-screen ">
          <Menu />
          <div className="flex-1 w-full h-full">

            <Outlet />
          </div>
        </div>
      </ShowMenuMobileProvider>
    </AuthVerification>
  )
}
