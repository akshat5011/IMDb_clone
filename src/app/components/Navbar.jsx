import { Suspense } from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar(params) {
  return (
    <div className="flex justify-center space-x-3 dark:bg-gray-600  bg-amber-100 lg:text-lg  p-4">
      <Suspense>
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
}
