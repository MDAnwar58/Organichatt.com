import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar";
import AppHeader from "./components/AppHeader";
import AppFooterBar from "./components/AppFooterBar";
import ManuBar from "./components/ManuBar";
import FooterBar from "./components/FooterBar";
import Title from "./components/Title";

function App() {
  return (
    <>
      <AppHeader />
      <div className=" sticky top-0 z-40">
        <AppBar />
        <ManuBar />
      </div>
      <Outlet />
      <AppFooterBar />
      <FooterBar />
    </>
  );
}

export default App;
