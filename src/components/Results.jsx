/* eslint-disable @next/next/no-img-element */

import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
