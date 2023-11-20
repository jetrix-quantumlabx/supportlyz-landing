"use client";

import React from "react";
import { SearchIcon } from "@/components/UI/Icons";

export const Search = () => {
  return (
    <div className="relative w-2/5 bg-white rounded-full h-14 flex items-center overflow-hidden">
      <div className="w-16 relative flex items-center justify-center text-xl text-emerald-500 after:content-[''] after:absolute after:-top-1 after:right-0 after:w-px after:h-7 after:z-20 after:bg-emerald-200">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search something cool..."
        className="h-full w-full bg-transparent outline-none text-black px-4 placeholder-gray-400"
      />
    </div>
  );
};
