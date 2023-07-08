import Person1 from "../assets/Person1.png";

export function Tweet() {
  return (
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
          Post
        </button>
      </div>
    </div>
  );
}
