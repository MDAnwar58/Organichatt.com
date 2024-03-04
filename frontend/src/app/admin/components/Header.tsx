"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { ManuIcon, NotificationIcon } from "./Icons";
import {
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/react";
import NotificationBtn from "./NotificationBtn";
import MessageBtn from "./MessageBtn";
import React from "react";
import DrawerNavigation from "./DrawerNavigation";

export default function Header({ sideBarHandle, sideBar }: any) {
  
  return (
    <React.Fragment>
      <Navbar fluid border className=" sticky top-0 border-l-0 z-10">
        <div className="flex items-center">
          {/* drawer init and toggle */}
          <button
            className="border border-2 border-gray-400 rounded-md px-[.3rem] py-[.15rem] me-3 xl:hidden flex"
            type="button"
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation"
          >
            <ManuIcon className="text-2xl text-gray-500" />
          </button>

          <span
            className={`text-3xl font-semibold ps-1.5 pe-[3.8rem] ${
              sideBar !== false ? "hidden" : "xl:block hidden"
            }`}
          >
            Admin Panel
          </span>
          <span className="text-2xl font-semibold ps-1.5 xl:hidden block">
            Admin Panel
          </span>
          <Button
            variant="bordered"
            isIconOnly
            className="me-3 border-gray-400  xl:flex hidden"
            onPress={sideBarHandle}
          >
            <ManuIcon className="text-2xl text-gray-500" />
          </Button>
          <input
            type="text"
            className="w-[450px] bg-gray-100 hover:bg-gray-200 rounded-xl px-5 xl:block hidden"
            placeholder="Search..."
          />
        </div>
        <div className="flex md:order-2 items-center list-none sm:gap-x-7 gap-x-0">
          <Navbar.Link href="#">
            <MessageBtn />
          </Navbar.Link>
          <Navbar.Link href="#">
            <NotificationBtn />
          </Navbar.Link>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
      <DrawerNavigation />
    </React.Fragment>
  );
}
