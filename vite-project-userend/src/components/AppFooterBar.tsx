import React from "react";
import {
  HomeIcon,
  LayoutGrid,
  OfferIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "./Icons";
import { Tooltip } from "@chakra-ui/react";
import Badge from "./Badge";

export default function AppFooterBar() {
  return (
    <nav className="md:hidden bg-slate-50 sticky bottom-0 relative z-50">
      <div className="flex items-center text-center">
        <a href="/" className="w-1/4 py-5 flex justify-center items-center">
          <div>
            <Tooltip
              hasArrow
              label="Home"
              placement="top"
              bg="gray.300"
              color="black"
            >
              <span className="flex justify-center">
                <HomeIcon className="text-2xl" />
              </span>
            </Tooltip>
          </div>
        </a>
        <a
          href="/products"
          className="w-1/4 py-5 flex justify-center items-center"
        >
          <div>
            <Tooltip
              hasArrow
              label="Products"
              placement="top"
              bg="gray.300"
              color="black"
            >
              <span className="flex justify-center">
                <ShoppingBagIcon className="text-2xl" />
              </span>
            </Tooltip>
          </div>
        </a>
        <a href="/" className="w-1/4 py-5 flex justify-center items-center">
          <div>
            <Tooltip
              hasArrow
              label="Offers"
              placement="top"
              bg="gray.300"
              color="black"
            >
              <span className="flex justify-center">
                <OfferIcon className="text-2xl" />
              </span>
            </Tooltip>
          </div>
        </a>
        <a href="" className="w-1/4 py-5 flex justify-center items-center">
          <div>
            <Tooltip
              hasArrow
              label="Browse Categories"
              placement="top"
              bg="gray.300"
              color="black"
            >
              <span className="flex justify-center">
                <LayoutGrid className="text-2xl" />
              </span>
            </Tooltip>
          </div>
        </a>
      </div>
      <Tooltip
        hasArrow
        label="Cart"
        placement="top"
        bg="gray.300"
        color="black"
      >
        <a
          href="/about"
          className="text-2xl absolute sm:-top-6 -top-7 bg-green-300 px-4 pt-4 pb-3 rounded-full border-2 border-green-500"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Badge count={5} className=" -top-[0.8rem] -right-[6px] text-[9px]">
            <ShoppingCartIcon className="text-2xl" />
          </Badge>
        </a>
      </Tooltip>
    </nav>
  );
}
