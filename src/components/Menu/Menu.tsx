import { Bolt, Calendar, Clock, Folder, House, LogOut } from "lucide-react";
import imgBug from '@/assets/debug.svg'
import { Link } from "react-router-dom";
export function Menu() {
  return (
    <header className="w-[100px] h-full flex flex-col justify-between py-4 items-center bg-white">
      <div>
        <img src={imgBug} alt="" />
      </div>
      <div className="flex flex-col gap-9">
        <Link to={'/'}>
          <House className="text-dh-gray-300 hover:text-dh-gray-300/60" />
        </Link>
        <Folder className="text-dh-gray-300 hover:text-dh-gray-300/60" />
        <Clock className="text-dh-gray-300 hover:text-dh-gray-300/60" />
        <Calendar className="text-dh-gray-300 hover:text-dh-gray-300/60" />
        <Bolt className="text-dh-gray-300 hover:text-dh-gray-300/60" />
      </div>
      <div>
        <LogOut className="text-dh-gray-300 hover:text-dh-gray-300/60" />
      </div>
    </header>
  )
}
