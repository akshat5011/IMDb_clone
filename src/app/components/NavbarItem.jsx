"use client";

import Link from "next/link";

// You're importing a component that needs `useSearchParams`.
// This React hook only works in a client component.
// To fix, mark the file (or its parent) with the `"use client"` directive.
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    // dynamically  modify the stye
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`m-4 hover:text-amber-500 font-semibold p-2 
        ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
