"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
    bg-white 
    border 
    border-gray-300 
    rounded-full 
    w-full 
    md:w-auto 
    py-2 
    cursor-pointer 
    shadow-sm 
    hover:shadow-md 
    transition
    "
    >
      <div
        className="
      flex 
      flex-row 
      items-center 
      justify-between
      "
      >
        <div
          className="
        font-semibold 
        px-6 
        text-sm
        text-black
        "
        >
          Search
        </div>
        <div
          className="
        border-x 
        border-gray-300
        flex-1 
        hidden sm:block 
        font-semibold 
        px-6 
        text-center 
        text-sm
        "
        >
          <span className="font-semibold text-black">Any</span>{" "}
          <span className="text-black"> ▼</span>
        </div>
        <div
          className="
        flex 
        flex-row 
        items-center 
        gap-3 
        pl-6 
        pr-2 
        text-gray-600 
        text-sm
        "
        >
          <div className="hidden sm:block">Add Guests</div>
          <div
            className="
          bg-black
           p-2 
           rounded-full 
           text-white 
           hover:bg-gray-900 
           transition-all 
           duration-200"
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
