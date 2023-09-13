/* eslint-disable @next/next/no-img-element */

"use client"; // Using client-side routing

// Imports the necessary modules
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// Created a functional component named "Card" that takes a "result" prop
export default function Card({ result }) {
  // Defines a state variable "favourite" and a function "setFavourite" to manage it
  const [favourite, setFavourite] = useState([]);

  return (
    // Main container for a movie card
    <div key={result.id} data-testid="movie-card" className="relative">
      {result.id && (
        // Favorite icon section, conditionally rendered
        <div className="absolute top-2 right-5 bg-[#F3F4F680] p-2 rounded-full">
          {favourite.includes(result.id) ? (
            <AiFillHeart
              onClick={() =>
                setFavourite([...favourite.filter((id) => id !== result.id)])
              }
              className="w-6 h-6 text-red-500 cursor-pointer"
            />
          ) : (
            <AiOutlineHeart
              onClick={() => setFavourite([...favourite, result.id])}
              className="w-6 h-6 text-red-500 cursor-pointer"
            />
          )}
        </div>
      )}

      {/* Movie poster */}
      <img
        src={`https://image.tmdb.org/t/p/original${
          result.poster_path || result.backdrop_path
        }`}
        alt={result.title}
        className="w-full object-cover"
        data-testid="movie-poster"
      />

      {/* Movie release date */}
      <p className="text-gray-400 text-sm" data-testid="movie-release-date">
        {result.release_date}
      </p>

      {/* Movie title */}
      <h2
        className="text-gray-900 text-lg font-bold truncate"
        data-testid="movie-title"
      >
        {result.original_title}
      </h2>

      {result.vote_average && (
        // IMDb and popularity section, conditionally rendered
        <div className="my-2 flex justify-between">
          {/* IMDb */}
          <div className="flex items-center space-x-2">
            <Image src="imdb.svg" alt="imdb Logo" width={50} height={30} />
            <p className="text-gray-900 text-sm">{result.vote_average}/10</p>
          </div>
          {/* Popularity */}
          <div className="flex items-center space-x-2">
            <Image
              src="/tomatoe.png"
              alt="imdb Logo"
              width={20}
              height={20}
              className="object-fit"
            />
            <p className="text-gray-900 text-sm">
              {Math.round(result.popularity)}%
            </p>
          </div>
        </div>
      )}

      {result.id && (
        // View detail link, conditionally rendered
        <Link className="underline font-bold" href={`/movies/${result.id}`}>
          View Detail
        </Link>
      )}
    </div>
  );
}
