import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react";
import { TweetAction } from "./TweetAction";
import TextareaAutosize from "react-textarea-autosize";

interface TweetProps {
  name: string;
  user: string;
  text: string;
  image: string;
}

export function Tweet({ name, user, image, text }: TweetProps) {
  return (
    <section className="w-full border-y-[1px] border-blue-100 px-5 py-6 flex gap-3">
      <img src={image} alt="User Picture" className="w-14 h-14 rounded-full" />

      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-base text-blue-400 leading-[160%] font-bold me-1">
          {name}{" "}
          <span className="text-sm text-blue-200 font-medium">{user}</span>
        </h2>

        <TextareaAutosize
          value={text}
          className="resize-none outline-none"
          readOnly
        />

        <footer className="h-9 pt-3 flex gap-12">
          <TweetAction icon={ChatCircle} label="32" />
          <TweetAction icon={ArrowsClockwise} label="16" />
          <TweetAction icon={Heart} label="28" />
        </footer>
      </div>
    </section>
  );
}
