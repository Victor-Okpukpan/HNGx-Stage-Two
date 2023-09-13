// Imports the necessary modules and components
import Footer from "@/components/Footer";
import HeaderComponent from "@/components/HeaderComponent";
import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  // Fetches data from the API
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.term}&language=en-US&include_adult=false`
  );
  // Error handler to check if the fetch was successful; if not, throw an error
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  // Parses the fetched data as JSON
  const data = await res.json();
  // Extracts the 'results' array from the data
  const results = data.results;

  return (
    // Main container
    <div className="px-3 xl:px-0 relative max-w-screen-lg mx-auto">
      {/* HeaderComponent */}
      <HeaderComponent />

      {/* Displays a message if there are no results */}
      {results && results.length === 0 && (
        <h1 className="text-center pt-36 text-4xl font-bold uppercase">
          No results found!
        </h1>
      )}

      {/* Renders the Results component with the 'results' data */}
      <div className="pt-40 pb-56">
        {results && <Results results={results} />}
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
