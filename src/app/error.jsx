"use client"; // Using client-side routing

// Imports the necessary module
import { useEffect } from "react";

export default function Error({ error, reset }) {
  // Used the useEffect hook to log the error whenever it changes
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl">Something went wrong!</h1>

      <div>
        {/* Triggers the "reset" function when clicked */}
        <button
          className="py-1 px-3 bg-rose-700 rounded-lg text-white mt-5"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
