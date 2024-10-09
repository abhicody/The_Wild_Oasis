"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import { useDarkMode } from "./DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      className="w-20 h-20 text-brand-600 bg-none border-none p-2.5 rounded-sm transition-all duration-200 hover:bg-gray-100"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default DarkModeToggle;
