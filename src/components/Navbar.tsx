"use client";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";
import DarkModeToggle from "@/components/DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow p-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
      <div className="flex items-center space-x-2 border rounded-md px-3 py-1 w-full md:w-auto bg-gray-100 dark:bg-gray-800">
        <FiSearch className="text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none text-sm text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 w-full"
        />
      </div>
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
        <FiBell className="text-gray-600 dark:text-gray-400 text-xl cursor-pointer" />
        <FiUser className="text-gray-600 dark:text-gray-400 text-xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
