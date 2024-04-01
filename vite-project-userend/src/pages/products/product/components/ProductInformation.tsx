import React, { useState } from "react";
import {
  FavoriteIcon,
  MinusIcon,
  PlusIcon,
  WishListIcon,
} from "../../../../components/Icons";

export default function ProductInformation() {
  return (
    <div className="">
      <h2 className="text-2xl pt-3">Coco Nuts</h2>
      <b className="text-xl pt-3">100BDT</b>
      <p className="text-sm pt-3 text-gray-600">Min Purchase Quantity: 1 pc</p>
      <div className="flex items-center pt-3">
        <select className="max-w-xs flex items-center border border-gray-300 rounded-md px-3 py-1">
          <option value="">500gm</option>
        </select>
        {/* <select className="max-w-xs flex items-center border border-gray-300 rounded-md px-3 py-1">
          <option>500gm </option>
        </select> */}
      </div>
      <div className="flex pt-3">
        <button
          type="button"
          className=" rounded-s-md border border-e-0 border-gray-500 px-3"
        >
          <PlusIcon />
        </button>
        <input
          type="text"
          className="w-16 text-center py-[.2rem] border border-gray-500 focus:bg-gray-100"
          defaultValue={1}
        />
        <button
          type="button"
          className=" rounded-e-md border border-s-0 border-gray-500 px-3 focus:bg-gray-100"
        >
          <MinusIcon />
        </button>
      </div>
      <div className="flex pt-3">
        <button className=" bg-green-500 text-white rounded-s-md px-5 py-2">
          ADD TO CART
        </button>
        <button
          type="button"
          className=" bg-yellow-500 text-white rounded-e-md px-5 py-2"
        >
          BUY NOW
        </button>
        {/* <Button>Stock Out</Button> */}
      </div>
      <p className=" text-gray-600 pt-4">SKU :SK-4ACQC7</p>
      <p className=" text-gray-600">Category:Islamic Gifts</p>
      <p className=" text-gray-600">Share :</p>
      <button type="button" className=" bg-transparent mt-1 flex items-center">
        <span className="text-md font-semibold me-1">ADD TO WISHLIST</span>
        <FavoriteIcon className={"text-[.95rem]"} />
      </button>
    </div>
  );
}
