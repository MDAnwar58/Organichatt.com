import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoIosCopy } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { MdRestore } from "react-icons/md";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaArrowDownWideShort } from "react-icons/fa6";

const DarkModeIcon = ({ className }: { className?: any }) => {
  return <MdDarkMode className={className} />;
};
const LightModeIcon = ({ className }: { className?: any }) => {
  return <MdOutlineLightMode className={className} />;
};
const DotsThreeOutlineIcon = ({ className }: { className?: any }) => {
  return <PiDotsThreeOutlineVerticalBold className={className} />;
};
const FaDownloadIcon = ({ className }: { className?: any }) => {
  return <FaCloudDownloadAlt className={className} />;
};
const HiOutlineInformationCircleIcon = ({ className }: { className?: any }) => {
  return <IoInformationCircleOutline className={className} />;
};
const MdDeleteIcon = ({ className }: { className?: any }) => {
  return <MdDelete className={className} />;
};
const FilterIcon = ({ className }: { className?: any }) => {
  return <CiFilter className={className} />;
};
const CheckIcon = ({ className }: { className?: any }) => {
  return <FaCheck className={className} />;
};
const RemoveIcon = ({ className }: { className?: any }) => {
  return <RxCross2 className={className} />;
};
const CopyIcon = ({ className }: { className?: any }) => {
  return <IoIosCopy className={className} />;
};
const RegImage = ({ className }: { className?: any }) => {
  return <FaRegImage className={className} />;
};
const RestoreIcon = ({ className }: { className?: any }) => {
  return <MdRestore className={className} />;
};
const UpArrowIcon = ({ className }: { className?: any }) => {
  return <FaArrowUpShortWide className={className} />;
};
const DownArrowIcon = ({ className }: { className?: any }) => {
  return <FaArrowDownWideShort className={className} />;
};

export {
  DarkModeIcon,
  LightModeIcon,
  DotsThreeOutlineIcon,
  FaDownloadIcon,
  HiOutlineInformationCircleIcon,
  MdDeleteIcon,
  FilterIcon,
  CheckIcon,
  RemoveIcon,
  CopyIcon,
  RegImage,
  RestoreIcon,
  UpArrowIcon,
  DownArrowIcon,
};
