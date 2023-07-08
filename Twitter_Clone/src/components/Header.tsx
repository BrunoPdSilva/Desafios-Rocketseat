import { Sparkle } from "phosphor-react";
import { useState, useEffect } from "react";

const saveTheme = (theme: string) => {
  localStorage.setItem("theme", theme);
};

const retrieveTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? "dark" : "";
};

export function Header() {
  const [theme, setTheme] = useState(retrieveTheme());

  function toggleTheme() {
    if (document.body.classList.contains("light")) {
      document.body.classList.remove("light");
    } else if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
    }

    document.body.classList.add(theme);
  }

  useEffect(() => {
    saveTheme(theme);
    toggleTheme();
  }, [theme]);

  return (
    <header>
      <div className="px-5 py-6 flex justify-between items-center">
        <h2 className="text-xl leading-none text-black font-bold dark:text-white">
          Home
        </h2>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Sparkle size={24} className="text-primary" />
        </button>
      </div>
    </header>
  );
}
