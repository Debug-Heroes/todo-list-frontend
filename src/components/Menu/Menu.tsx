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
        <div className="group hover:bg-purple-400 hover:px-2 hover:py-2 hover:rounded-full flex ease-out justify-center duration-100">
           <House className="text-dh-gray-300 group-hover:text-white w-full " />
        </div>
            
        </Link>
        <div className="group hover:bg-purple-400 hover:px-2 hover:py-2 hover:rounded-full flex ease-out justify-center duration-100">
          <Folder className="text-dh-gray-300 group-hover:text-white w-full" />
        </div>
        
        <div className="group hover:bg-purple-400 hover:px-2 hover:py-2 hover:rounded-full flex ease-out justify-center duration-100">
          <Clock className="text-dh-gray-300 group-hover:text-white w-full" />
        </div>
        <div className="group hover:bg-purple-400 hover:px-2 hover:py-2 hover:rounded-full flex ease-out justify-center duration-100">
          <Calendar className="text-dh-gray-300 group-hover:text-white w-full" />
        </div>
        <div className="group hover:bg-purple-400 hover:px-2 hover:py-2 hover:rounded-full flex ease-out justify-center duration-100">
          <Bolt className="text-dh-gray-300 group-hover:text-white w-full" />
        </div>
      </div>
      <div>
        <LogOut className="text-dh-gray-300 hover:text-dh-gray-300/60" />
      </div>
    </header>
  )
}
