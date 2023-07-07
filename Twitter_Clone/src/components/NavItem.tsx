import { ElementType } from "react";

interface NavItemProps {
  icon: ElementType;
  label: string;
  active?: boolean;
}

export function NavItem({ icon: Icon, label, active }: NavItemProps) {
  return (
    <li
      className={`flex items-center gap-5 font-bold text-xl text-${
        active ? "primary" : "blue-400"
      } cursor-pointer`}
    >
      <Icon weight={active ? "fill" : "regular"} size={32} />
      {label}
    </li>
  );
}
