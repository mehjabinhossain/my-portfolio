import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
     document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
      <div
        className={cn(
          "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full",
          "text-yellow-300"
        )}
      >
        <Sun className="h-6 w-6" />
      </div>
    );
  };
