"use client";
import React, { useState } from "react";
import "@/app/globals.css";
import "flowbite";
import Header from "@/app/admin/components/Header";
import SideBar from "@/app/admin/components/SideBar";

export default function BackendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBar, setSideBar] = useState(true);

  const sideBarHandle = () => {
    if (sideBar === true) {
      setSideBar(false)
    }else{
      setSideBar(true)
    }
  }

  return (
    <div className="flex">
      {sideBar === true && (
        <div className="xl:w-2/12 xl:block hidden">
          <SideBar />
        </div>
      )}
      <div className={`${sideBar === true ? "xl:w-10/12 w-full" : "w-full"}`}>
        <Header sideBarHandle={sideBarHandle} sideBar={sideBar} />
        {children}
      </div>
    </div>
  );
}
