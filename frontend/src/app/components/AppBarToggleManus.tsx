"use client";
import {
  Link,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import AppBarContext from "../en/context/AppBarContext";
import ToggleManuBar from "./ToggleManuBar";

export default function AppBarToggleManus() { 
  
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
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <NavbarContent className="lg:hidden" justify="end">
            <NavbarMenuToggle
              className=" p-3"
            />
          </NavbarContent>
        </NavbarMenuItem>
        <ToggleManuBar />
      </NavbarMenu>
    </React.Fragment>
  );
} 