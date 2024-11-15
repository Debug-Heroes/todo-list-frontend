import { ArrowLeftFromLine, Bolt, Calendar, Clock, Folder, House, LogOut } from "lucide-react";
import imgBug from '@/assets/debug.svg'
import { LinkMenu } from "./LinkMenu";
import { useNavigate } from "react-router-dom";
import { useMenuOpen } from "@/hook/useMenuOpen";
export function Menu() {
  const navigate = useNavigate()
  const { open, setOpen } = useMenuOpen()
  return (
    <header className={`w-[100px]  fixed lg:relative transition-all  transform duration-300 ease-in-out ${open ? 'visible' : 'w-0 -ml-52'} lg:w-[100px] lg:ml-0 lg:visible  left-0 top-0 h-full flex flex-col justify-between py-4 items-center bg-white z-50`}>
      <div className="flex justify-center items-center flex-col gap-4  text-black">
        <ArrowLeftFromLine onClick={() => setOpen(!open)} className="lg:hidden lg:size-0" />
        <img src={imgBug} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <LinkMenu
          to={'/'}
          Icon={House}
        />
        <LinkMenu
          to={'/folder'}
          Icon={Folder}
        />
        <LinkMenu
          to={'/clock'}
          Icon={Clock}
        />
        <LinkMenu
          to={'/calendar'}
          Icon={Calendar}
        />
        <LinkMenu
          to={'/bolt'}
          Icon={Bolt}
        />

      </div>
      <button onClick={() => {
        sessionStorage.clear()
        navigate('/sign-in')
      }}>
        <LogOut className="text-dh-gray-300 hover:text-dh-gray-300/60" />
      </button>
    </header>
  )
}
