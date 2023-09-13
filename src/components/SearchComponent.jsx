"use client"; // Using client-side routing
// Imported the necessary modules and components
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

// SearchComponent component
export default function SearchComponent() {
  // Gets the current pathname using Next.js's usePathname hook
  const pathName = usePathname();
  // Accesses the Next.js router
  const router = useRouter();
  // Defines a state variable "searchTerm" and a function "setSearchTerm" to manage it
  const [searchTerm, setSearchTerm] = useState("");
  // Function to handle the search
  function searchHandler(e) {
    e.preventDefault();
    // Uses the router to navigate to the search page with the specified search term
    router.push(`/search/${searchTerm}`);
  }
  
  return (
    // Form for search input
    <form
      onSubmit={searchHandler}
      className="flex items-center border-2 border-gray-300 flex-grow py-2 px-3 rounded-md"
    >
      {/* Input field for search term */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="What do you want to watch?"
        className={`flex-1 focus:outline-none bg-transparent  ${
          pathName === "/" && "placeholder:text-white text-white"
        }`}
      />

      {/* Search button/icon */}
      <AiOutlineSearch
        onClick={searchHandler}
        className="text-lg cursor-pointer"
      />
    </form>
  );
}
