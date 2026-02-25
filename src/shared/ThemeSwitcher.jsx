import { Palette } from "lucide-react";
import ThemeLayout from "./ThemeLayout";
import { useState } from "react";

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 fixed right-5 bottom-5 z-20 rounded-full bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center"
      >
        <Palette />
      </button>
      {isOpen && <ThemeLayout />}
    </>
  );
};

export default ThemeSwitcher;
    