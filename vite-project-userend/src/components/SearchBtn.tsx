import React from 'react';
import {
  Menu,
  MenuDivider,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { SearchIcon } from './Icons';

export default function SearchBtn() {
  return (
    <Menu>
      <MenuButton>
        <SearchIcon className="text-2xl" />
      </MenuButton>
      <MenuList className=" w-[300px] mt-5">
        <div className="px-5 text-center py-1 flex">
          <input type="search" placeholder='Search Product...' className="w-full border py-2 px-5 rounded-s-md" />
          <button className="bg-gray-200 py-2 px-3 rounded-e-md border">
            <SearchIcon className="text-2xl text-gray-500" />
          </button>
        </div>
      </MenuList>
    </Menu>
  );
}
