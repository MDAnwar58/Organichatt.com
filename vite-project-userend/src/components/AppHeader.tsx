import React from "react";

export default function AppHeader() {
  return (
    <nav className="sm:flex justify-between px-10 border-b border-gray-100 py-3  bg-white">
      <ul className="flex gap-x-3 sm:justify-start justify-center">
        <li>example@gmail.com</li>
        <li>+8801918725xxx</li>
      </ul>
      <ul className=" gap-x-3 sm:text-start text-center">
        <li>example@gmail.com</li>
      </ul>
    </nav>
  );
}
