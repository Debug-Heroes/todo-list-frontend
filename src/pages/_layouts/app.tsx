import { Menu } from "@/components/Menu/Menu";
import { Outlet } from "react-router-dom";
export function AppLayout() {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <Menu />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
