"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoids SSR issues

  return (
    <button
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
