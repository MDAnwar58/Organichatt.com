import React, { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./pages/components/NavBar";
import SideBar from "./pages/components/SideBar";

export default function Layout() {
  const [userBtnDropdown, setUserBtnDropdown] = useState(false);
  const [ecommerceDropDownBtn, setEcommerceBtnDropdown] = useState(false);
  const [sideBar, setSideBar] = useState(true);
  const [mobileSreenSideBar, setMobileSreenSideBar] = useState(false);
  const dropdownRef = useRef(null);

  const userBtnDropdownHandle = () => {
    setUserBtnDropdown(!userBtnDropdown);
  };

  const ecommerceBtnDropdownHandle = () => {
    setEcommerceBtnDropdown(!ecommerceDropDownBtn);
  };

  const sideBarHandle = () => {
    setSideBar(!sideBar);
  };

  const mobileSreenSideBarHandle = () => {
    setMobileSreenSideBar(!mobileSreenSideBar);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.pointerType !== "mouse"
    ) {
      setUserBtnDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Fragment>
      <NavBar
        userBtnDropdownHandle={userBtnDropdownHandle}
        userBtnDropdown={userBtnDropdown}
        dropdownRef={dropdownRef}
        sideBarHandle={sideBarHandle}
        mobileSreenSideBarHandle={mobileSreenSideBarHandle}
      />
      {sideBar === true && (
        <SideBar
          ecommerceBtnDropdownHandle={ecommerceBtnDropdownHandle}
          ecommerceDropDownBtn={ecommerceDropDownBtn}
          mobileSreenSideBar={mobileSreenSideBar}
        />
      )}
      <div className={`p-4 ${sideBar === true && "sm:ml-64"}`}>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
      {mobileSreenSideBar === true && (
        <div
          onClick={mobileSreenSideBarHandle}
          drawer-backdrop=""
          className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30"
        ></div>
      )}
    </Fragment>
  );
}
