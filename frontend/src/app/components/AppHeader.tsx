"use client";
import React from "react";
import { Email, PhoneNumber } from "./Icons";
import PropTypes from 'prop-types';
import AppBarContext from "../en/context/AppBarContext";

export default function AppHeader() {
  const { appToggleManuBarHandle, toggleManuBarStatus } = AppBarContext();
  console.log(toggleManuBarStatus);
  return (
    <React.Fragment>
        <nav className="sm:flex justify-between px-10 py-2 bg-slate-200">
          <ul className="sm:flex items-center">
            <li className="flex items-center sm:justify-start justify-center text-center">
              <Email />
              <span className="ps-2">anwar.saeed656@gmail.com</span>
            </li>
            <li className="flex items-center sm:ps-5 px-0  sm:justify-start justify-center text-center">
              <PhoneNumber />
              <span className="">+8801918725999</span>
            </li>
          </ul>
          <ul className="sm:flex">
            <li className="text-center">
              <span>Logout</span>
            </li>
          </ul>
        </nav>
    </React.Fragment>
  );
}
