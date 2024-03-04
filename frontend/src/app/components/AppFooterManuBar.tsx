"use client";
import React from "react";
import { CartIcon, HomeIcon } from "./Icons";
import { Badge, Button, Link, Tooltip } from "@nextui-org/react";
import { FaHome } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function AppFooterManuBar() {
  const [isInvisible, setIsInvisible] = React.useState(false);
  return (
    <nav className="lg:hidden bg-slate-50 sticky bottom-0 relative z-50">
      <div className="flex items-center text-center">
        <a href="" className="w-1/4 py-4 flex justify-center items-center">
          <div>
            <Tooltip
              key={"Home"}
              color={"success"}
              content={"Home"}
              className="capitalize"
            >
              <span className="flex justify-center">
                <FaHome className="text-2xl" />
              </span>
            </Tooltip>
          </div>
        </a>
        <a href="" className="w-1/4 py-4 flex justify-center items-center">
          <div>
            <Tooltip
              key={"Shopping in this store"}
              color={"success"}
              content={"Shopping in this store"}
              className="capitalize"
            >
              <span className="flex justify-center">
                <IoStorefront className="text-2xl" />
              </span>
            </Tooltip>
          </div>
        </a>
        <a href="" className="w-1/4 py-4 flex justify-center items-center">
          <div>
            <Tooltip
              key={"Contact Us"}
              color={"success"}
              content={"Contact Us"}
              className="capitalize"
            >
              <span className="flex justify-center">
                <MdOutlineConnectWithoutContact className="text-2xl" />
              </span>
            </Tooltip>
          </div>
        </a>
        <a href="" className="w-1/4 py-4 flex justify-center items-center">
          <div>
            <Tooltip
              key={"Account"}
              color={"success"}
              content={"Account"}
              className="capitalize"
            >
              <span className="flex justify-center">
                <MdOutlineAccountCircle className="text-2xl" />
              </span>
            </Tooltip>
          </div>
        </a>
      </div>
      <Tooltip
        key={"Carts"}
        color={"success"}
        content={"Carts"}
        className="capitalize hover:bg-green-300"
      >
        <Link
          href="/about"
          className="absolute md:-top-7 sm:-top-8 -top-8 bg-green-300 md:px-5 md:pt-5 md:pb-4 px-4 pt-4 pb-3 rounded-full border-2 border-green-500"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Badge
            color="danger"
            content={5}
            isInvisible={isInvisible}
            shape="circle"
          >
            <CartIcon />
          </Badge>
        </Link>
      </Tooltip>
    </nav>
  );
}
