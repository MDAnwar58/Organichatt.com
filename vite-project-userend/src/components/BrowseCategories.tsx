import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react'

export default function BrowseCategories() {
  return (
    <Menu>
      <MenuButton
        className=" bg-gray-50 px-7 border border-gray-300 rounded-s-md  lg:w-5/12 w-7/12"
      >
        Browse Categories
        {/* <ThreeLineManuIcon /> */}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
}
