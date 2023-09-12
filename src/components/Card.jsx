/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Card({ results }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {results.map((result) => (
        <div key={result.id} data-testid="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
            alt={result.title}
            className="w-full object-cover"
            data-testid="movie-poster"
          />
          <p className="text-gray-400 text-sm" data-testid="movie-release-date">
            {result.release_date}
          </p>
          <h2
            className="text-gray-900 text-lg font-bold"
            data-testid="movie-title"
          >
            {result.original_title}
          </h2>

          {result.vote_average && (
            <div className="my-2 flex justify-between">
              <div className="flex items-center space-x-2">
                <Image src="imdb.svg" alt="imdb Logo" width={50} height={30} />
                <p className="text-gray-900 text-sm">
                  {result.vote_average}/10
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
                <p className="text-gray-900 text-sm">
                  {Math.round(result.popularity)}%
                </p>
              </div>
            </div>
          )}

          {result.id && (
            <Link className="underline font-bold" href={`/movies/${result.id}`}>
              View Detail
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
