import React, { useState } from "react";
import "../assets/css/navbar.css";
// import user from "@/assets/images/user.png";
import UserDropdownBtn from "./UserDropdownBtn";
import { SearchIcon } from "./Icons";
import ShoppingCartDropdownBtn from "./ShoppingCartDropdownBtn";
import WishListBtn from "./WishListBtn";
import BrowseCategories from "./BrowseCategories";
import ToggleManuBtn from "./ToggleManuBtn";
import useBodyScrollLock from "./useBodyScrollLock";
import ManuBars from "./ManuBars";
import SearchBtn from "./SearchBtn";
import { ChakraProvider } from "@chakra-ui/react";
import logo from "./../assets/images/organic-logo.png";
import { Link } from "react-router-dom";

export default function AppBar() {
  const [manuBtnRotate, setManuBtnRotate] = useState(false);
  const { scrollLockOrUnlock } = useBodyScrollLock();

  const rotateHandle = () => {
    if (manuBtnRotate === false) {
      setManuBtnRotate(true);
      scrollLockOrUnlock();
    } else {
      setManuBtnRotate(false);
      scrollLockOrUnlock();
    }
  };
  return (
    <nav className=" flex justify-between items-center px-10 py-3 bg-white md:border-b md:shadow-none shadow-md relative">
      <div className="flex items-center">
        <ToggleManuBtn
          rotateHandle={rotateHandle}
          manuBtnRotate={manuBtnRotate}
        />
        <Link to="/" className="logo logo:hidden">
          <img src={logo} className="h-[55px] w-[135px]" alt="..." />
        </Link>
      </div>
      <div className="md:flex hidden xl:w-[48%] lg:w-[58%] w-[59%] relative">
        <ChakraProvider>
          <BrowseCategories />
        </ChakraProvider>
        {/* <BrowseCategoriesDropdownBtn /> */}
        <input
          type="search"
          className=" bg-gray-50 border border-gray-300 px-5 py-2 border-x-0 lg:w-7/12 w-5/12"
          placeholder="Search Product..."
        />
        <button
          type="button"
          className="bg-gray-50 px-3  border border-gray-300 text-xl rounded-e-md"
        >
          <SearchIcon />
        </button>
      </div>
      <div className=" mx-auto px-3 w-[50%] search-box search-box:hidden">
        <input
          type="search"
          className=" bg-gray-50 border border-gray-300 px-5 py-2 border-e-0 rounded-s-md w-full"
          placeholder="Search Product..."
        />
        <button
          type="button"
          className="bg-gray-50 px-3  border border-gray-300 text-xl rounded-e-md"
        >
          <SearchIcon />
        </button>
      </div>
      <ul className="flex gap-x-5 items-center">
        <li className="md:block hidden">
          <WishListBtn />
        </li>
        <li className="md:block hidden mt-1">
          <ChakraProvider>
            <ShoppingCartDropdownBtn />
          </ChakraProvider>
        </li>
        <li className="search-item:hidden search-item">
          <SearchBtn />
        </li>
        <li>
          <ChakraProvider>
            <UserDropdownBtn />
          </ChakraProvider>
        </li>
      </ul>
      <div
        className={`absolute left-0 top-[5em] bg-slate-50 w-full h-[100vh] md:hidden ${
          manuBtnRotate === true ? "" : "hidden"
        } px-10 py-5`}
      >
        <ManuBars />
      </div>
    </nav>
  );
}
