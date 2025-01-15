import Results from "./components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const parameters = await searchParams;
  const genre = parameters.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTrending" ? "trending/all/week" : "movie/top_rated"
    }?api_key=$s{API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const result = data.results;

  return (
    <div>
      <Results results={result} />
    </div>
  );
}
