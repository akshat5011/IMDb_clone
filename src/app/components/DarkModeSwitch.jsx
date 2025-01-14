"use client";
import { MdLightMode } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch(params) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  // if the page is not mounted(not loaded completely) we get a case like light mode on client side and dark on
  // server side which causes a mismatch and gives hydration error

  //   Hydration failed because the server rendered HTML didn't match the client.
  //   As a result this tree will be regenerated on the client.
  //   This can happen if a SSR-ed Client Component used
  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <IoMoonSharp
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
}


