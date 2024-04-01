import React from "react";
import { Badge, Image, MenuDivider } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

export default function UserDropdownBtn() {
  return (
    <Menu>
      <MenuButton>
        <Image
          src="https://i.ibb.co/Hq6ZkfT/user.png"
          className="w-[40px] h-[40px]"
          border="2px solid"
          borderColor="#22C55E"
          borderRadius="100%"
          alt="user"
        />
      </MenuButton>
      <MenuList>
        <div className="px-3 py-1">
          <h3 className="text-sm font-bold text-green-500">MD Anwar Sayeed</h3>
          <h2 className=" underline">anwar@gmail.com</h2>
        </div>
        <MenuDivider />
        <MenuItem>Sattings</MenuItem>
        <div className="md:hidden">
          <MenuItem>
            Wish Lists{" "}
            <Badge className="ms-3" colorScheme="red">
              5
            </Badge>
          </MenuItem>
        </div>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
