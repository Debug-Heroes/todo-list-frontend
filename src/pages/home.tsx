import { AddTask } from "@/components/AddTask/AddTask";
import { Card } from "@/components/Card/Card";
import { CardNewTask } from "@/components/Card/CardNewTask";
import { SpinnerCard } from "@/components/Card/CardSpinner";
import { ShowMenuButton } from "@/components/Menu/ShowMenuButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import { TitleOfTypeOfProgress } from "@/components/Tasks/TitleOfTypeOfProgress";
import { getAllTasks } from "@/infra/http/tasks/get-all-tasks";

import { BetweenVerticalEnd, ChevronDown, Download } from "lucide-react";
import { useQuery } from "react-query";

export function Home() {
  const { data: tasks, isFetching } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getAllTasks({})
  })
  return (
    <div className="bg-gray-100 w-full h-full overflow-y-hidden md:overflow-y-auto">
      <header className="flex justify-center items-center shadow-md gap-4 md:pl-0 md:gap-0">
        <ShowMenuButton />
        <div className="flex-1 max-w-[1399px] h-16 container mx-auto flex items-center ">
          <SearchBar />
        </div>
      </header>


      <main className="w-full max-w-[1399px] mx-auto pb-6 text-gray-700 container mt-4">

        <div className="flex justify-between items- px-2">
          <div>
            <span className="text-xs md:text-sm text-slate-400">Abstergo</span>
            <h2 className="text-xl md:text-3xl font-semibold">My Tasks</h2>
          </div>

          <div className="flex justify-center items-center gap-3">
            <div className="border-2 border-slate-300 rounded p-1">
              <Download className="size-5 text-slate-400" />
            </div>
            <div className="flex justify-between items-center border-2 border-slate-300 rounded p-0.5  gap-2">
              <div className="flex justify-center items-center gap-3 relative">
                <BetweenVerticalEnd className=" size-5 text-slate-400 " width={32} />
                <span className="before:absolute before:block before:left-6 before:top-0 before:bg-slate-400 before:w-[2px] before:h-[20px] text-xs text-slate-400">Board</span>
              </div>
              < ChevronDown className="text-xs text-slate-400" />
            </div>
            <AddTask />
          </div>
        </div>

        <div className="mx-auto  w-[400px] sm:w-full lg:max-w-[1399px] px-2 overflow-auto grid grid-cols-tasks-grid-sm md:grid-cols-tasks-grid-md gap-8 mt-5 font-semibold ">
          <div className="">
            <TitleOfTypeOfProgress
              title="IN PROGRESS"
            />
            <div className="flex flex-col gap-3 overflow-y-scroll h-[500px] scrollbar">
              {isFetching && (
                <>
                  <SpinnerCard />
                  <SpinnerCard />
                </>
              )}
              {
                tasks?.map(task => <Card key={task.id} title={task.name} />)
              }
              {!isFetching && <CardNewTask />}
            </div>
          </div>
          <div className="h-full">
            <TitleOfTypeOfProgress
              className="text-cyan-400 border-cyan-400"
              title="COMPLETED"
            />
            <div className="flex flex-col gap-3 overflow-y-scroll h-[500px] scrollbar">
              {isFetching && (
                <>
                  <SpinnerCard />
                  <SpinnerCard />
                </>
              )}
              {!isFetching && <CardNewTask />}
            </div>
          </div>
          <div className="h-full">
            <TitleOfTypeOfProgress
              className="text-slate-400 border-slate-400 "
              title="BACKLOG"
            />
            <div className="flex flex-col gap-3 overflow-y-scroll h-[500px] scrollbar">
              {isFetching && (
                <>
                  <SpinnerCard />
                  <SpinnerCard />
                </>
              )}
              {!isFetching && <CardNewTask />}
            </div>
          </div>
        </div>

      </main>
    </div>

  )
}
