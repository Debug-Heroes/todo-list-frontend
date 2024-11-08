import Button from "@/components/Button/Button";
import SearchBar from "@/components/SearchBar/SearchBar";
import { BetweenVerticalEnd, ChevronDown, Download } from "lucide-react";

export function Home() {
  return (
    <>
    <div className="bg-gray-100 w-full h-screen">
        <header className="shadow-md">
          <div className="h-16 container mx-auto flex items-center ">
            <SearchBar />
          </div>
        </header>


        <main className="text-gray-700 container mx-auto mt-12">

          <div className="flex justify-between items-end">
            <div>
              <span className="text-sm text-slate-400">Abstergo</span> 
              <h2 className="text-3xl font-semibold">My Tasks</h2>
            </div>

            <div className="flex gap-[27px]">
              <div className="border-2 border-slate-300 rounded p-1">
                <Download className="text-slate-400"/>
              </div>
              <div className="border-2 border-slate-300 rounded w-32 flex items-center gap-2">
                <BetweenVerticalEnd className="text-slate-400 border-r-2 border-r-slate-400 " width={32} />
                <span className="text-slate-400">Board</span>< ChevronDown className="text-slate-400" width={18} />
              </div>
              <div>
                <Button label={'Add New Task +'}/>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-5 font-semibold">
            <div className="text-violet-600 border-b-2 border-violet-600 p-3">
              <span>IN PROGRESS</span>
            </div>
            <div className="text-cyan-400 border-b-2 border-cyan-400 p-3">
              <span>COMPLETED</span>
            </div>
            <div className="text-slate-400 border-b-2 border-slate-400 p-3">
              <span>BACKLOG</span>
            </div>
          </div>

        </main>
    </div>
    </>
    
  )
}
