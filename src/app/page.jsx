// Imports the necessary modules and components
import HeaderComponent from "@/components/HeaderComponent";
import Image from "next/image";
import { HiPlay } from "react-icons/hi";
import Results from "@/components/Results";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

// Home page component
export default async function Home() {
  // Fetches data from the API
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1&2`,
    { next: { revalidate: 10000 } }
  );
  // Error handler to check if the fetch was successful; if not, throw an error
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // Parses the fetched data as JSON
  const data = await res.json();
  // Slices the results to get the first 10 movies
  const results = data.results.slice(0, 10);

  // Renders the main content of the home page
  return (
    <main className="relative pb-56">
      {/* Header component */}
      <HeaderComponent />
      {/* Hero section with movie details */}
      <HeroSection data={data}/>
      {/* Section for featured movies */}
      <section className="max-w-screen-lg mx-auto mt-10 px-3 xl:px-0">
        <h1 className="text-4xl font-bold font-dm-sans">Featured Movies</h1>
        {/* Render the Results component with the list of featured movies */}
        <Results results={results} />
      </section>
      {/* Footer component */}
      <Footer />
    </main>
  );
}
