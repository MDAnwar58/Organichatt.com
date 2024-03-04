"use client"
import React from "react";
import AppHeader from "./AppHeader";
import AppManuBar from "./AppManuBar";
import NavBar from "./NavBar";
import AppBarContext from "../context/AppBarContext";

export default function AppBar() {
  const { toggleManuBarStatus, appToggleManuBarHandle } = AppBarContext();
  return (
    <React.Fragment>
      <AppHeader toggleManuBarStatus={toggleManuBarStatus} />
      <div className="sticky top-0 z-50">
        <NavBar appToggleManuBarHandle={appToggleManuBarHandle} />
        <AppManuBar />
      </div>
    </React.Fragment>
  );
} 
