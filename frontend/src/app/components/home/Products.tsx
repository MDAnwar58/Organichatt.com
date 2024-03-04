import { Chip, Image, useDisclosure } from '@nextui-org/react';
import { Rating } from 'flowbite-react';
import React from 'react'
import { Cart2Icon, ViewIcon, ViewerIcon, WishList2Icon } from '../Icons';
import Link from 'next/link';
import ItemDetails from '../ItemDetails';

export default function Products() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <React.Fragment>
      <div className=" bg-slate-100 rounded-md relative product-img-box">
        <Image
          width="100%"
          alt="NextUI Fruit Image with Zoom"
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          radius="none"
          className="h-[32vh] rounded-md product-img"
        />
        <div className=" absolute top-0 left-0 z-10 bg-slate-200/20 rounded-md w-full h-[32vh] icon-shadow-box">
          <div className="flex justify-end pt-16">
            <div className="">
              <Link href="">
                <Cart2Icon />
              </Link>
              <Link href="">
                <WishList2Icon />
              </Link>
              <Link href="/product-details/lkjlk">
                <ViewIcon />
              </Link>
              <button onClick={onOpen}>
                <ViewerIcon
                  cssStyle={
                    "border-1 border-gray-300 text-gray-500 bg-white text-2xl rounded-md mb-1 me-2 cursor-pointer"
                  }
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
          <Chip
            size="sm"
            color="warning"
            variant="bordered"
            classNames={{
              base: "py-0 text-[10px] ms-2",
            }}
          >
            5.0
          </Chip>
        </div>
        <div className="pb-4 px-4 flex justify-between">
          <Link href="/product-details/lkjlk">
            <b>Coco Nuts</b>
          </Link>
          <p>$20</p>
        </div>
      </div>
      <ItemDetails isOpen={isOpen} onOpenChange={onOpenChange} />
    </React.Fragment>
  );
}
