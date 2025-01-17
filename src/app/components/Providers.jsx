"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    // added this in tailwind.config.mjs  darkMode:"class",

    <ThemeProvider enableSystem={true} attribute="class">
      <div
        className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 
      transition-colors duration-500 min-h-screen select-none"
      >
        {children}
      </div>
    </ThemeProvider>
  );
}
