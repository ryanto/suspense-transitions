import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

export function Gallery({ pizza }) {
  let [index, setIndex] = useState(0);
  let photos = pizza.photos;

  let next = () => {
    setIndex(index >= photos.length - 1 ? 0 : index + 1);
  };

  let previous = () => {
    setIndex(index === 0 ? photos.length - 1 : index - 1);
  };

  return (
    <div className="relative flex">
      <button
        onClick={previous}
        className="absolute left-0 z-10 h-full text-white transition-colors hover:bg-gray-800/20"
      >
        <ChevronLeftIcon className="w-10 h-10 mx-4" />
      </button>
      <img
        src={`/${photos[index]}`}
        alt={`${pizza.name}`}
        className="object-cover w-full aspect-[16/13] top-0"
      />
      <button
        onClick={next}
        className="absolute right-0 z-10 h-full text-white transition-colors hover:bg-gray-800/20"
      >
        <ChevronRightIcon className="w-10 h-10 mx-4" />
      </button>
    </div>
  );
}
