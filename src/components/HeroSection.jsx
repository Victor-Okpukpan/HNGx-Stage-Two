"use client";

// Imports necessary dependencies and components
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiPlay } from "react-icons/hi";

// Defines and exports the HeroSection component
export default function HeroSection({ data }) {
    // Extracts a slice of movie results from the data (items 11 to 18)
  const results = data.results.slice(11, 19);
  // Initializes a state to store the current data (initially set to the sliced results)
  const [currentData, setCurrentData] = useState(results || []);

  // Function to shuffle an array randomly
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

   // Uses useEffect to run code after the component has mounted
  useEffect(() => {
    // Sets up an interval to shuffle the data every 10 seconds
    setInterval(() => {
      const shuffledMovies = shuffleArray(results);
      setCurrentData(shuffledMovies);
    }, 10000);
  });

  // Renders the HeroSection component
  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${currentData[0]?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[36rem] px-3 xl:px-0 text-white relative after:bg-black/50 after:top-0 after:absolute after:bottom-0 after:left-0 after:right-0"
    >
      <div className="max-w-screen-lg mx-auto flex py-48 items-center min-h-full">
        <div className="flex w-[480px] flex-col justify-start items-start h-full z-10 font-dm-sans">
          {/* Movie title */}
          <h2 className="text-5xl font-bold">
            {currentData[0]?.original_title}
          </h2>
          {/* Ratings section */}
          <div className="my-2 flex justify-between space-x-4">
            <div className="flex items-center space-x-2">
              <Image src="imdb.svg" alt="imdb Logo" width={50} height={30} />
              <p className="text-white text-sm">
                {currentData[0]?.vote_average}/10
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="/tomatoe.png"
                alt="imdb Logo"
                width={20}
                height={20}
                className="object-fit"
              />
              <p className="text-white text-sm bg-transparent">
                {Math.round(currentData[0]?.popularity)}%
              </p>
            </div>
          </div>
          {/* Movie description */}
          <p className="mt-5">{currentData[0]?.overview}</p>
          {/* Watch Trailer button */}
          <button className="uppercase py-1 px-3 bg-rose-700 flex items-center mt-5">
            <HiPlay className="text-lg mr-3" /> Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
}
