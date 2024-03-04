import React, { useState } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import {
  FavoriteIcon,
  MinusIcon,
  PlusIcon,
  WishListIcon,
} from "@/app/components/Icons";

export default function ProductInformation() {
  const [value, setValue] = useState(50);
  const variants = ["flat", "bordered", "underlined", "faded"];
  return (
    <div className="">
      <h2 className="text-2xl pt-3">Coco Nuts</h2>
      <b className="text-xl pt-3">100BDT</b>
      <p className="text-sm pt-3 text-gray-600">Min Purchase Quantity: 1 pc</p>
      <div className="flex items-center pt-3">
        <Select
          labelPlacement="outside-left"
          variant="bordered"
          label="Weight:"
          placeholder="Select an weight"
          className="max-w-xs flex items-center"
        >
          <SelectItem>500gm </SelectItem>
        </Select>
        {/* <Select
          labelPlacement="outside-left"
          variant="bordered"
          label="Size:"
          placeholder="Select an size"
          className="max-w-xs flex items-center"
        >
          <SelectItem>500gm </SelectItem>
        </Select> */}
      </div>
      <div className="flex pt-3">
        <Button size="sm" isIconOnly className=" rounded-e-none">
          <PlusIcon />
        </Button>
        <input
          type="text"
          className="w-16 text-center py-[.2rem] border-gray-300"
          defaultValue={1}
        />
        <Button size="sm" isIconOnly className=" rounded-s-none">
          <MinusIcon />
        </Button>
      </div>
      <div className="flex pt-3">
        <Button color="success" size="md" className=" rounded-e-none">
          ADD TO CART
        </Button>
        <Button color="warning" size="md" className=" rounded-s-none">
          BUY NOW
        </Button>
        {/* <Button>Stock Out</Button> */}
      </div>
      <p className=" text-gray-600 pt-4">SKU :SK-4ACQC7</p>
      <p className=" text-gray-600">Category:Islamic Gifts</p>
      <p className=" text-gray-600">Share :</p>
      <Button size="sm" className=" bg-transparent mt-1">
        <span className="text-md font-semibold">ADD TO WISHLIST</span>
        <FavoriteIcon className={"text-[.9rem]"} />
      </Button>
    </div>
  );
}
