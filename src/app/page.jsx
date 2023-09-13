import HeaderComponent from "@/components/HeaderComponent";
import Image from "next/image";
import { HiPlay } from "react-icons/hi";
import Results from "@/components/Results";
import Footer from "@/components/Footer";

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results.slice(0, 10);
  return (
    <main className="relative pb-56">
      <HeaderComponent />
      <div
        style={{
          backgroundImage: `url('poster-image.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=" w-full h-[36rem] text-white relative after:bg-black/50 after:top-0 after:absolute after:bottom-0 after:left-0 after:right-0"
      >
        <div className="max-w-screen-lg mx-auto flex items-center min-h-full">
          <div className="flex w-[480px] flex-col justify-start items-start h-full z-10 font-dm-sans">
            <h2 className="text-5xl font-bold">John Wick 3 : Parabellum</h2>
            <div className="my-2 flex justify-between space-x-4">
              <div className="flex items-center space-x-2">
                <Image src="imdb.svg" alt="imdb Logo" width={50} height={30} />
                <p className="text-white text-sm">8.6/10</p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/tomatoe.png"
                  alt="imdb Logo"
                  width={20}
                  height={20}
                  className="object-fit"
                />
                <p className="text-white text-sm bg-transparent">97%</p>
              </div>
            </div>
            <p className="mt-5">
              John Wick is on the run after killing a member of the
              international assassins&apos; guild, and with a $14 million price
              tag on his head, he is the target of hit men and women everywhere.
            </p>

            <button className="uppercase py-1 px-3 bg-rose-700 flex items-center mt-5">
              <HiPlay className="text-lg mr-3" /> Watch Trailer
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-screen-lg mx-auto mt-10 px-3 xl:px-0">
        <h1 className="text-4xl font-bold font-dm-sans">Featured Movies</h1>
        <Results results={results} />
      </section>

      <Footer />
    </main>
  );
}
