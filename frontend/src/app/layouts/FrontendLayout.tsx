"use client";
import React from "react";
import "../globals.css";
import "../flowbite.js";
import { Providers } from "../providers";
import AppBar from "../components/AppBar";
import Message from "../components/Message";
import AppFooterManuBar from "../components/AppFooterManuBar";
import AppFooterBar from "../components/AppFooterBar";
import { usePathname } from "next/navigation";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  return (
    <Providers>
      <AppBar />
      {children}
      <Message />
      {pathname !== '/sign-in' && <AppFooterManuBar />}
      <AppFooterBar />
    </Providers>
  );
}
