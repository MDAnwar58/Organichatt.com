import React from "react";
import MegaManuDropdownBtn from "./MegaManuDropdownBtn";

export default function AppManuBar() {
  return (
    <div className=" bg-green-300 px-10 lg:py-0 py-3 lg:block hidden">
      <ul className="flex">
        <li>
          <MegaManuDropdownBtn />
        </li>
        <li className="py-2 px-3 ps-0">
          <a href="" className="">
            Home
          </a>
        </li>
        <li className="py-2 px-3">
          <a href="" className="">
            Products
          </a>
        </li>
        <li className="py-2 px-3">
          <a href="" className="">
            Services
          </a>
        </li>
        <li className="py-2 px-3">
          <a href="" className="">
            Contact
          </a>
        </li>
      </ul>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Shop
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent> */}
    </div>
  );
}
