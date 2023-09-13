"use client"
import Image from "next/image";
import SearchComponent from "./SearchComponent";
import { usePathname } from "next/navigation";

export default function HeaderComponent() {
  const pathName = usePathname();

  return (
    <header className={`absolute ${pathName == "/" ? "text-white" : "text-black" } top-0 left-0 right-0 flex items-center space-x-14 py-4 max-w-screen-lg mx-auto font-dm-sans  z-[100]`}>
      <div className="flex items-center space-x-6">
        <Image src="/tv.svg" width={50} height={50} alt="Logo" />
        <h1 className="text-2xl font-bold">MovieBox</h1>
      </div>

      <SearchComponent />

      <div className="flex items-center space-x-6">
        <button>Sign In</button>
        <button>
            <Image src="/menu.svg" width={36} height={36} alt="Menu Button" />    
        </button>
      </div>
    </header>
  );
}
