import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Post } from "./components/Post";
import { posts } from "./data/posts";
import { Tweet } from "./components/Tweet";

export function App() {
  return (
    <div className="min-h-screen grid grid-cols-[20rem_1fr] font-roboto bg-white dark:bg-gray-400">
      <Aside />

      <main className="border-x-[1px] border-blue-100 dark:border-gray-200">
        <Header />
        <Tweet />
        <div className="w-full h-3 bg-blue-100 dark:bg-gray-300"></div>

        {posts.map(({ user, image, name, text }) => (
          <Post key={user} image={image} name={name} user={user} text={text} />
        ))}
      </main>
    </div>
  );
}
