import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import TextareaAutosize from "react-textarea-autosize";
import { PostAction } from "./PostAction";

interface TweetProps {
  name: string;
  user: string;
  text: string;
  image: string;
}

export function Post({ name, user, image, text }: TweetProps) {
  return (
    <section className="w-full border-y-[1px] border-blue-100 dark:border-gray-200 px-5 py-6 flex gap-3">
      <img src={image} alt="User Picture" className="w-14 rounded-full h-14" />

      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-base text-blue-400 leading-[160%] font-bold me-1 dark:text-white">
          {name}{" "}
          <span className="text-sm text-blue-200 font-medium dark:text-gray-100">
            {user}
          </span>
        </h2>

        <TextareaAutosize
          value={text}
          className="resize-none outline-none bg-white dark:bg-gray-400 text-black dark:text-gray-50"
          readOnly
        />

        <footer className="h-9 pt-3 flex gap-12">
          <PostAction icon={ChatCircle} label="32" />
          <PostAction icon={ArrowsClockwise} label="16" />
          <PostAction icon={Heart} label="28" />
        </footer>
      </div>
    </section>
  );
}
