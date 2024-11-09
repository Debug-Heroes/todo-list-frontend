import { Bolt, Calendar, Clock, Folder, House, LogOut } from "lucide-react";
import imgBug from '@/assets/debug.svg'
import { LinkMenu } from "./LinkMenu";
export function Menu() {
  return (
    <header className="w-[100px] h-full flex flex-col justify-between py-4 items-center bg-white">
      <div>
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
      <div>
        <LogOut className="text-dh-gray-300 hover:text-dh-gray-300/60" />
      </div>
    </header>
  )
}
