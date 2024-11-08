import { SearchIcon } from "lucide-react";

export default function Search() {
    return (
        <>
        <div className="flex gap-3">
            <SearchIcon className="text-gray-400"/>
            <input type="text" className="bg-transparent w-64 text-gray-400" placeholder="Search..."/>
        </div>
        </>
    )
}