import {
  House,
  Hash,
  Bell,
  EnvelopeSimple,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Sparkle,
} from "phosphor-react";

import Person1 from "./assets/Person1.png";

import Logo from "./assets/logo.svg";
import { NavItem } from "./components/NavItem";
import { Tweet } from "./components/Tweet";
import { tweets } from "./data/tweetsData";
import { useEffect, useState } from "react";

const saveTheme = (theme: string) => {
  localStorage.setItem("theme", theme);
};

const retrieveTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? "dark" : "";
};

export function App() {
  const [theme, setTheme] = useState(retrieveTheme());

  function toggleTheme() {
    if (document.body.classList.contains("light")) {
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
    }

    document.body.classList.add(theme);
  }

  useEffect(() => {
    saveTheme(theme);
    toggleTheme();
  }, [theme]);

  return (
    <div className="min-h-screen grid grid-cols-[20rem_1fr] font-roboto bg-white dark:bg-gray-400">
      <aside className="px-5 py-6 flex flex-col gap-8 max-w-20rem">
        <img src={Logo} alt="Twitter logo" className="w-8 h-8" />

        <ul className="flex flex-col gap-8">
          <NavItem label="Home" icon={House} active />
          <NavItem label="Explore" icon={Hash} />
          <NavItem label="Notificações" icon={Bell} />
          <NavItem label="Messages" icon={EnvelopeSimple} />
          <NavItem label="Bookmarks" icon={BookmarkSimple} />
          <NavItem label="Lists" icon={FileText} />
          <NavItem label="Profile" icon={User} />
          <NavItem label="More" icon={DotsThreeCircle} />
        </ul>

        <button className="rounded-full bg-primary px-6 py-4 text-white font-bold text-xl leading-none w-full">
          Tweet
        </button>
      </aside>
      <main className="border-x-[1px] border-blue-100 dark:border-gray-200">
        <header>
          <div className="px-5 py-6 flex justify-between items-center">
            <h2 className="text-xl leading-none text-black font-bold dark:text-white">
              Home
            </h2>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sparkle size={24} className="text-primary" />
            </button>
          </div>
          <div className="h-[9.5rem] px-5 py-6 border-y-[1px] border-blue-100 dark:border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={Person1}
                alt="User Picture"
                className="w-14 aspect-square rounded-full"
              />
              <p className="text-xl font-medium text-blue-300 dark:text-gray-100">
                What's happening?
              </p>
            </div>
            <div className="flex justify-end">
              <button className="px-6 py-4 bg-primary text-base font-bold text-white rounded-full ml-auto leading-none">
                Tweet
              </button>
            </div>
          </div>
        </header>
        <div className="w-full h-3 bg-blue-100 dark:bg-gray-300"></div>

        {tweets.map(({ user, image, name, text }) => (
          <Tweet key={user} image={image} name={name} user={user} text={text} />
        ))}
      </main>
    </div>
  );
}

export default App;
