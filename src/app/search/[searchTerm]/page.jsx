import Results from "@/app/components/Results";

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&include_adult=false&language=en-US`
  );
  if (!res.ok) throw new Error("Error fetchoing data");
  const data = await res.json();
  const result = data.results;

  return (
    <div>
      {result && result.length === 0 && (
        <h1 className="text-center pt-6">No movies found</h1>
      )}

      {result && <Results results={result} />}
    </div>
  );
}
