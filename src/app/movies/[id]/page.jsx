"use client"; // Using client-side routing

// Imports the necessary dependencies
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";

// MovieDetailPage component
export default function MovieDetailPage({params}) {
  const router = useRouter();
  // Gets the current pathname
  const pathName = usePathname();
  // Extracts the movie ID from the pathname
  const id = params.id;
  // Initializes state to store movie data
  const [data, setData] = useState([]);
  
  // Fetches movie data when the 'id' changes
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1&2`
      );
      // Checks if the fetch was successful
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      // Parses the response as JSON and update the state
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-9 max-w-screen-lg mx-auto px-3 xl:px-0 font-poppins">
        {/* Navigation */}
        <nav className="py-8 border-r-2 rounded-tr-[45px] rounded-br-[45px]">
          <div className="flex items-center space-x-6">
            <Image src="/tv.svg" width={50} height={50} alt="Logo" />
            <h1 className="text-2xl font-bold">MovieBox</h1>
          </div>
          {/* Navigation menu */}
          <ul className="mt-5">
            {/* Home */}
            <li onClick={() => router.push("/")} className="text-xl text-[#666] font-semibold px-14 py-8 hover:bg-[#BE123C1A] cursor-pointer">
              Home
            </li>
            {/* Movies */}
            <li
              className={`text-xl text-[#666] font-semibold px-14 py-8 hover:bg-[#BE123C1A] cursor-pointer ${
                pathName.includes("movies")
                  ? "border-r-[#BE123C] border-r-4 bg-[#BE123C1A]"
                  : ""
              }`}
            >
              Movies
            </li>
            {/* TV Series */}
            <li className="text-xl text-[#666] font-semibold px-14 py-8 hover:bg-[#BE123C1A] cursor-pointer">
              TV Series
            </li>
            {/* Upcoming */}
            <li className="text-xl text-[#666] font-semibold px-14 py-8 hover:bg-[#BE123C1A] cursor-pointer">
              Upcoming
            </li>
          </ul>
          {/* Play movie quizzes section */}
          <div className="p-4">
            <div className="border border-[#BE123CB2] md:w-[170px] p-2 rounded-2xl">
              <h3 className="text-[#333333CC] font-semibold">
                Play movie quizes and earn free tickets
              </h3>
              <p className="text-[#666] text-sm font-medium mt-2">
                50k people are playing now
              </p>
              <div className="flex items-center justify-center mt-2">
                <button className="bg-[#BE123C33] text-[#BE123C] py-1 px-3 rounded-full text-sm font-medium">
                  Start Playing
                </button>
              </div>
            </div>
          </div>

          <button className="text-center w-full flex items-center justify-center text-xl text-[#666] font-semibold">
            <FiLogOut className="mr-2" />
            Logout
          </button>
        </nav>

        {/* Movie Details */}
        <section className="basis-3/4 py-9">
          {/* Movie background image */}
          <div
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original${
                data.backdrop_path
              }")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-80 rounded-md"
          ></div>

          <div className="mt-3">
            <h2 className="text-2xl text-[#404040] font-medium mb-3">
              {/* Movie Title */}
              <span data-testid="movie-title">{data.original_title}</span>{" "}
              &middot; {/* Movie Release Date */}
              <span data-testid="movie-release-date">
                {new Date(data.release_date).toUTCString()}
              </span>{" "}
              &middot;
              {/* Movie Runtime */}
              <span data-testid="movie-runtime">{data.runtime}</span> mins
            </h2>
            {/* Movie Overview */}
            <p data-testid="movie-overview" className="text-xl font-[#333]">
              {data.overview}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
