"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MovieDetailPage() {
  const pathName = usePathname();
  const id = pathName.split("/").pop();

  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-9 max-w-screen-lg mx-auto px-3 xl:px-0">
        <section className="py-8">
          <div className="flex items-center space-x-6">
            <Image src="/tv.svg" width={50} height={50} alt="Logo" />
            <h1 className="text-2xl font-bold">MovieBox</h1>
          </div>

          <ul className="mt-5">
            <li className="text-xl text-[#666] font-semibold px-14 py-8 hover:bg-[#BE123C1A] ">
              Home
            </li>
            <li
              className={`text-xl text-[#666] font-semibold px-14 py-8 hover:bg-[#BE123C1A] ${
                pathName.includes("movies")
                  ? "border-r-[#BE123C] border-r-4 bg-[#BE123C1A]"
                  : ""
              }`}
            >
              Movies
            </li>
            <li className="text-xl text-[#666] font-semibold px-14 py-8 hover:bg-[#BE123C1A] ">
              TV Series
            </li>
            <li className="text-xl text-[#666] font-semibold px-14 py-8 hover:bg-[#BE123C1A] ">
              Upcoming
            </li>
          </ul>

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
        </section>
        <section className="basis-3/4 py-9">
          <div
            style={{
              backgroundImage: "url('/trailer.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-72"
          ></div>

          <div className="mt-3">
            <h2 className="text-2xl text-[#404040] font-medium mb-3">
              <span data-testid="movie-title">{data.original_title}</span> &middot;{" "}
              <span data-testid="movie-release-date">{new Date(data.release_date).toUTCString()}</span> &middot;{" "}
              <span data-testid="movie-runtime">{data.runtime}</span> mins
            </h2>
            <p data-testid="movie-overview" className="text-xl font-[#333]">{data.overview}</p>
          </div>
        </section>
      </div>
    </>
  );
}
