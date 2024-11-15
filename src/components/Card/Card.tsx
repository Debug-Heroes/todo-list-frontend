import { Paperclip } from "lucide-react"
import { faker } from '@faker-js/faker';

export function Card() {
  return (
    <div className="bg-white cursor-pointer rounded-md border border-dh-gray-300 shadow p-4 h-[181px]">
      <header className="flex justify-between items-center mb-4">
        <span>Clickable propotype</span>
        <span>Feb 14</span>
      </header>
      <div className="flex flex-wrap gap-2">
        <span className="text-xs px-4 py-1 text-[#959CB7] bg-[#E9F0F5] rounded-md">Acme Co.</span>
        <span className="text-xs px-4 py-1 text-[#5A4EE5] bg-[#F4F2FF] rounded-md">UI Design</span>
      </div>
      <div className="flex justify-between items-center  mt-9">
        <div className="flex items-center">
          <div className="size-7 rounded-full bg-red-300 shadow-md">
            <img className="w-full h-full rounded-full" src={faker.image.avatarGitHub()} alt="" />
          </div>
          <div className="size-7 rounded-full bg-white -ml-2 shadow-md">
            <img className="w-full h-full rounded-full" src={faker.image.avatarGitHub()} alt="" />
          </div>
          <div className="size-7 rounded-full bg-white -ml-2 shadow-md" >
            <img className="w-full h-full rounded-full" src={faker.image.avatarGitHub()} alt="" />
          </div>
          <div className="size-7 rounded-full bg-white -ml-2 shadow-md" >
            <img className="w-full h-full rounded-full" src={faker.image.avatarGitHub()} alt="" />
          </div>
          <div className="size-7 rounded-full bg-white -ml-2 shadow-md" >
            <img className="w-full h-full rounded-full" src={faker.image.avatarGitHub()} alt="" />
          </div>
          <div className="size-7 rounded-full bg-white -ml-2 shadow-md" >
            <img className="w-full h-full rounded-full" src={faker.image.avatarGitHub()} alt="" />
          </div>
          <div className="size-7 rounded-full bg-white -ml-2 shadow-md" >
            <img className="w-full h-full rounded-full" src={faker.image.avatarGitHub()} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 py-1 px-3 rounded-md border border-dh-gray-300">
          <Paperclip size={13} />
          <span>2</span>
        </div>
      </div>
    </div>
  )
}
