"use client"
import { useEffect } from "react"
export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error)
    }, [error]);
  return (
    <div className="text-center mt-10">
        <h1 className="text-4xl">Something went wrong!</h1>
        <div className="">
        <button className="py-1 px-3 bg-rose-700 rounded-lg text-white mt-5" onClick={() => reset()}>Try Again</button>
        </div>
    </div>
  )
}