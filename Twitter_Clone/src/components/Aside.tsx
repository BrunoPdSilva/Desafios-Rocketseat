import { Bell, BookmarkSimple, DotsThreeCircle, EnvelopeSimple, FileText, Hash, House, User } from "phosphor-react";
import { AsideItem } from "./AsideItem";

import Logo from "../assets/logo.svg";

export function Aside() {
  return (
    <aside className="px-5 py-6 flex flex-col gap-8 max-w-20rem">
      <img src={Logo} alt="Twitter logo" className="w-8 h-8" />

      <ul className="flex flex-col gap-8">
        <AsideItem label="Home" icon={House} active />
        <AsideItem label="Explore" icon={Hash} />
        <AsideItem label="Notificações" icon={Bell} />
        <AsideItem label="Messages" icon={EnvelopeSimple} />
        <AsideItem label="Bookmarks" icon={BookmarkSimple} />
        <AsideItem label="Lists" icon={FileText} />
        <AsideItem label="Profile" icon={User} />
        <AsideItem label="More" icon={DotsThreeCircle} />
      </ul>

      <button className="rounded-full bg-primary px-6 py-4 text-white font-bold text-xl leading-none w-full">
        Tweet
      </button>
    </aside>
  );
}
