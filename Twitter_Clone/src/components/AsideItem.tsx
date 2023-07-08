import { ElementType } from "react";

interface NavItemProps {
  icon: ElementType;
  label: string;
  active?: boolean;
}

export function AsideItem({ icon: Icon, label, active }: NavItemProps) {
  return (
    <li
      className={`flex items-center gap-5 font-bold text-xl ${
        active ? "text-primary" : "blue-400 dark:text-white"
      } cursor-pointer`}
    >
      <Icon weight={active ? "fill" : "regular"} size={32} />
      <span className="max-[500px]:hidden">{label}</span>
    </li>
  );
}
