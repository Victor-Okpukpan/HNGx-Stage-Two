"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchComponent() {
    const router = useRouter();
    const [ searchTerm, setSearchTerm ] = useState("");
    
    function searchHandler(e){
        e.preventDefault();
        router.push(`/search/${searchTerm}`);
    }
  return (
    <form onSubmit={searchHandler} className="flex items-center border-2 border-gray-300 flex-grow py-2 px-3 rounded-md">
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="What do you want to watch?" className="flex-1 focus:outline-none bg-transparent text-white placeholder:text-white" />
        <AiOutlineSearch onClick={searchHandler} className="text-lg cursor-pointer" />
    </form>
  )
}
