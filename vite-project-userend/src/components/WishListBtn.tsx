import React from "react";
import { FavoriteIcon } from "./Icons";
import Badge from "./Badge";

export default function WishListBtn() {
  return (
    <a href="" className="">
      <Badge count={5} className="-top-1 -right-[6px] text-[9px]">
        <FavoriteIcon className="text-2xl" />
      </Badge>
    </a>
  );
}
