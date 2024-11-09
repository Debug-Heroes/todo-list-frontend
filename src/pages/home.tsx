import Button from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { CardNewTask } from "@/components/Card/CardNewTask";
import SearchBar from "@/components/SearchBar/SearchBar";
import { TitleOfTypeOfProgress } from "@/components/Tasks/TitleOfTypeOfProgress";

import { BetweenVerticalEnd, ChevronDown, Download } from "lucide-react";

export function Home() {
  return (
    <>
      <div className="bg-gray-100 w-full h-screen">
        <header className="shadow-md">
          <div className="max-w-[1399px] h-16 container mx-auto flex items-center ">
            <SearchBar />
          </div>
        </header>


        <main className="max-w-[1399px]  text-gray-700 container mx-auto mt-4">

          <div className="flex justify-between items-end">
            <div>
              <span className="text-sm text-slate-400">Abstergo</span>
              <h2 className="text-3xl font-semibold">My Tasks</h2>
            </div>

            <div className="flex gap-[27px]">
              <div className="border-2 border-slate-300 rounded p-1">
                <Download className="text-slate-400" />
              </div>
              <div className="border-2 border-slate-300 rounded w-32 flex items-center gap-2">
                <BetweenVerticalEnd className="text-slate-400 border-r-2 border-r-slate-400 " width={32} />
                <span className="text-slate-400">Board</span>< ChevronDown className="text-slate-400" width={18} />
              </div>
              <div>
                <Button label={'Add New Task +'} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-5 font-semibold ">
            <div className="h-full">
              <TitleOfTypeOfProgress
                title="IN PROGRESS"
              />
              <div className="flex flex-col gap-3 overflow-y-scroll h-[500px] scrollbar">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <CardNewTask />
              </div>
            </div>
            <div className="h-full">
              <TitleOfTypeOfProgress
                className="text-cyan-400 border-cyan-400"
                title="COMPLETED"
              />
              <div className="flex flex-col gap-3 overflow-y-scroll h-[500px] scrollbar">
                <Card />
                <CardNewTask />
              </div>
            </div>
            <div className="h-full">
              <TitleOfTypeOfProgress
                className="text-slate-400 border-slate-400 "
                title="BACKLOG"
              />
              <div className="flex flex-col gap-3 overflow-y-scroll h-[500px] scrollbar">
                <Card />
                <Card />
                <CardNewTask />
              </div>
            </div>
          </div>

        </main>
      </div>
    </>

  )
}
