"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar, 
  Badge,
} from "@nextui-org/react";
import AppLogo from "./AppLogo";
import { CartIcon, WishListIcon } from "./Icons";
import AppBarToggleManus from "./AppBarToggleManus";
import PropTypes from 'prop-types';
import AppBarContext from "../en/context/AppBarContext";

export default function AppBar() {
  const [isInvisible, setIsInvisible] = React.useState(false);
  return (
    <Navbar maxWidth="full" isBordered position="static">
      <AppBarToggleManus />
      <NavbarBrand>
        <AppLogo />
        <p className="font-bold text-inherit lg:block hidden">Organichatt</p>
      </NavbarBrand>

      <NavbarContent className="flex gap-4" justify="center">
        <div className="relative md:w-[40em] sm:w-[30em] w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <NavbarItem className="lg:block hidden">
          <Link href="#" className="py-2 me-3">
            <Badge
              color="danger"
              content={5}
              isInvisible={isInvisible}
              shape="circle"
            >
              <CartIcon size={30} />
            </Badge>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="py-2 me-3">
            <Badge
              color="danger"
              content={5}
              isInvisible={isInvisible}
              shape="circle"
            >
              <WishListIcon size={30} />
            </Badge>
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign In
          </Button>
        </NavbarItem> */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger className="lg:block hidden">
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

AppBar.propTypes = {
  appToggleManuBarHandle: PropTypes.any,
};
