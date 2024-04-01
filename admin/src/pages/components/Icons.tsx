import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const DarkModeIcon = ({ className }: { className?: any }) => {
  return <MdDarkMode className={className} />;
};
const LightModeIcon = ({ className }: { className?: any }) => {
  return <MdOutlineLightMode className={className} />;
};

export { DarkModeIcon, LightModeIcon };
