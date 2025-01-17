// Fix the problem for "search params object is empty in production with next 13 app dir"
// for more info "https://github.com/vercel/next.js/issues/43077"
export const dynamic = "force-dynamic"; // this is the fix

import Results from "./components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const parameters = await searchParams;
  const genre = parameters.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTrending" ? "trending/all/week" : "movie/top_rated"
    }?api_key=${API_KEY}&language=en-US&page=1`,
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
