// Imports the Image component from Next.js
import Image from "next/image";

export default function loading() {
  return (
    <div className="max-w-screen-lg mx-auto min-h-screen flex items-center justify-center">
      {/* Displays the loading spinner */}
      <Image
        src="/spinner.svg"
        alt="Results Loading..."
        width={50}
        height={50}
      />
    </div>
  );
}
