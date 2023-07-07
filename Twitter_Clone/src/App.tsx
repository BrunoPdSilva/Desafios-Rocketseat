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
import Person2 from "./assets/Person2.png";
import Person3 from "./assets/Person3.png";
import Person4 from "./assets/Person4.png";
import Person5 from "./assets/Person5.png";
import Person6 from "./assets/Person6.png";

import Logo from "./assets/logo.svg";
import { NavItem } from "./components/NavItem";

export function App() {
  return (
    <div className="min-h-screen grid grid-cols-[20rem_1fr] font-roboto">
      <aside className="px-5 py-6 flex flex-col gap-8">
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
      <main className="border-x-[1px] border-blue-100">
        <header>
          <div className="px-5 py-6 flex justify-between items-center">
            <h2 className="text-xl leading-none text-black font-bold">Home</h2>
            <Sparkle size={24} className="text-primary" />
          </div>
          <div className="h-[9.5rem] px-5 py-6 border-y-[1px] border-blue-100">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={Person1}
                alt="User Picture"
                className="w-14 aspect-square rounded-full"
              />
              <p className="text-xl font-medium text-blue-300">
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
      </main>
    </div>
  );
}

export default App;
