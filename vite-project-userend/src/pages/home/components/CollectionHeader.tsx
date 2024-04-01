import React from "react";

export default function CollectionHeader() {
  return (
    <div className="sm:flex justify-between pb-3 items-center">
      <div>
        <h2 className=" text-gray-500 text-3xl font-bold md:border-b-4">
          Collection
        </h2>
      </div>
      <div className=" sm:text-start text-center sm:py-0 py-3">
        <a
          href=""
          className=" text-sm font-bold text-green-600 border border-green-600 hover:bg-green-500 hover:text-white transition-color  rounded-md px-3 py-1"
        >
          View All
        </a>
      </div>
    </div>
  );
}
