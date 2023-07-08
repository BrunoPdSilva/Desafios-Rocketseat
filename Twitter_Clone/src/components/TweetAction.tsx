import { ElementType } from "react";

interface TweetActionProps {
  label: string;
  icon: ElementType;
}

export function TweetAction({ icon: Icon, label }: TweetActionProps) {
  return (
    <button className="flex gap-2 text-blue-200">
      <Icon size={24} />
      {label}
    </button>
  );
}
