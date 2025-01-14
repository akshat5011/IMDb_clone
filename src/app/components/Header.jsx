import MenuIten from "./MenuItem";
import { IoIosHome } from "react-icons/io";
import { FiInfo } from "react-icons/fi";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-5">
      <div className="flex">
        <MenuIten title="HOME" address="/" Icon={IoIosHome} />
        <MenuIten title="ABOUT" address="/about" Icon={FiInfo} />
      </div>

      <div className="flex space-x-5 items-center">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            {/* px-2 = padding of x-axis */}
            <span className="bg-amber-500 font-bold text-white py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline"> Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
