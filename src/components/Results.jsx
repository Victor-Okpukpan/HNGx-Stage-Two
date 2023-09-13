/* eslint-disable @next/next/no-img-element */

// Imported the Card component
import Card from "./Card";

// Results component
export default function Results({ results }) {
  return (
    // Grid layout for results, with responsive columns and a gap between them
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {/* Map through the array of results and render each result using the Card component */}
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
