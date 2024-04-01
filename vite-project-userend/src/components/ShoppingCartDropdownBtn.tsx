import React from "react";
import { ShoppingCartIcon } from "./Icons";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import Badge from "./Badge";

export default function ShoppingCartDropdownBtn() {
  return (
    <Menu>
      <MenuButton>
        <Badge count={5} className="-top-1 -right-[6px] text-[9px]">
          <ShoppingCartIcon className="text-2xl" />
        </Badge>
      </MenuButton>
      <MenuList>
        <div className="px-5 pt-1 text-center pb-3">
          <p className="pb-1">cart - 2x - 1000tk</p>
          <a
            href=""
            className=" bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium"
          >
            View Cart
          </a>
        </div>
      </MenuList>
    </Menu>
  );
}
