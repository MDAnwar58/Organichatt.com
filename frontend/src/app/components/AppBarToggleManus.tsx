"use client";
import {
  Link,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import AppBarContext from "../context/AppBarContext";
import ToggleManuBar from "./ToggleManuBar";
import PropTypes from 'prop-types';

export default function AppBarToggleManus({ appToggleManuBarHandle }) {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
    "Log Out",
    "Log Out",
    "Log Out",
    "Log Out",
    "Log Out",
    "Log Out",
    "Log Out",
    "Log Out",
  ];
  return (
    <React.Fragment>
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle onClick={appToggleManuBarHandle} />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <NavbarContent className="lg:hidden" justify="end">
            <NavbarMenuToggle
              onClick={appToggleManuBarHandle}
              className=" p-3"
            />
          </NavbarContent>
        </NavbarMenuItem>
        <ToggleManuBar />
      </NavbarMenu>
    </React.Fragment>
  );
}

AppBarToggleManus.propTypes = {
  appToggleManuBarHandle: PropTypes.any,
};
