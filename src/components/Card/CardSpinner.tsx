export function SpinnerCard() {
  return (
    <div className="bg-white animate-pulse h-[181px]  rounded-md border border-dh-gray-300 shadow py-7 px-4 ">
      <header className="flex justify-between items-center mb-4">
        <span className="animate-pulse bg-slate-400 rounded-sm h-3 w-12" />
        <span className="animate-pulse bg-slate-400 rounded-sm h-3 w-10" />
      </header>
      <div className="flex flex-wrap gap-2">
        <span className="animate-pulse bg-slate-400 rounded-sm h-[18px] w-14" />
        <span className="animate-pulse bg-slate-400 rounded-sm h-[18px] w-14" />
      </div>
      <div className="flex justify-between items-center  mt-9">
        <div className="flex items-center">
          <span className="animate-pulse bg-slate-400 rounded-full size-8" />
        </div>
        <div className="flex animate-pulse bg-slate-400 justify-center items-center gap-1 py-1 px-3 rounded-md border border-dh-gray-300">
          <span className=" rounded-sm size-4" />
        </div>
      </div>
    </div>
  )
}
