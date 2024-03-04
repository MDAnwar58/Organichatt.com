import React from "react";
import MegaManuDropdownBtn from "./MegaManuDropdownBtn";
import Link from "next/link";

export default function AppManuBar() {
  return (
    <div className=" bg-green-300 px-10 lg:py-1 py-3 lg:block hidden opacity-90 shadow-md">
      <ul className="flex">
        <li>
          <MegaManuDropdownBtn />
        </li>
        <li className="py-2 px-3 ps-0">
          <Link href="/" className="">
            Home
          </Link>
        </li>
        <li className="py-2 px-3">
          <Link href="/products" className="">
            Products
          </Link>
        </li>
        <li className="py-2 px-3">
          <Link href="/offers" className="">
            Offers
          </Link>
        </li>
        <li className="py-2 px-3">
          <Link href="/contact" className="">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
