import React, { Fragment } from "react";
import { DownArrowIcon, UpArrowIcon } from "./Icons";

// interface Props {}

export default function Column({
  name,
  icon,
  iconClassName,
  sortBy,
  onClick,
  sortByDir,
}: {
  name?: any;
  icon?: boolean;
  iconClassName?: any;
  sortBy?: any;
  onClick?: any;
  sortByDir?: any;
}) {
  let sorting;
  if (icon === true) {
    if (sortByDir === "id") {
      if (sortBy === "desc") {
        sorting = <UpArrowIcon className={iconClassName} />;
      } else {
        sorting = <DownArrowIcon className={iconClassName} />;
      }
    } else {
      // if (sortByDir === "") {
      //   sorting = <UpArrowIcon className={iconClassName} />;
      // }
      sorting = <UpArrowIcon className={iconClassName} />;
    }
    if (sortByDir === "name") {
      if (sortBy === "desc") {
        sorting = <UpArrowIcon className={iconClassName} />;
      } else {
        sorting = <DownArrowIcon className={iconClassName} />;
      }
    }
  }
  return (
    <Fragment>
      <div
        className={`flex items-center justify-center w-full py-3 cursor-pointer ${
          icon === true && "hover:bg-gray-200 transition-all"
        }`}
        onClick={onClick}
      >
        <span>{name}</span>
        {/* {icon === true
          ? sortByDir === "" ||
            (sortByDir === "id" && sortBy === "desc" && (
              <UpArrowIcon className={iconClassName} />
            ))
          : ""} */}
        {sorting}
      </div>
    </Fragment>
  );
}
