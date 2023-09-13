import Footer from "@/components/Footer";
import HeaderComponent from "@/components/HeaderComponent";
import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.term}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  const results = data.results;
  return (
    <div className="px-3 xl:px-0 relative max-w-screen-lg mx-auto">
      <HeaderComponent />

      {results && results.length === 0 && (
        <h1 className="text-center pt-36 text-4xl font-bold uppercase">No results found!</h1>
      )}

      <div className="pt-40 pb-56">{results && <Results results={results} />}</div>

      <Footer />
    </div>
  );
}
