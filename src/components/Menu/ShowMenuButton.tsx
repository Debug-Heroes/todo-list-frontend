import { useMenuOpen } from "@/hook/useMenuOpen";
import { Menu } from "lucide-react";

export function ShowMenuButton() {
  const { open, setOpen } = useMenuOpen()
  return (
    <div className="shadow-md rounded-sm ml-4 p-2 text-black lg:size-0 lg:hidden lg:invisible lg:p-0">
      <Menu onClick={() => setOpen(!open)} className="" />
    </div>
  )
}
