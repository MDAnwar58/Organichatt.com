import React, { Fragment } from "react";
import ProductRating from "./ProductRating";
import {
  FavoriteIcon,
  GrFormViewIcon,
  ShoppingCartIcon,
  ViewfinderIcon,
} from "./Icons";
import { Link } from "react-router-dom";
export default function Product({ openModal }: any) {
  return (
    <Fragment>
      <div className=" bg-slate-100 rounded-md shadow-sm hover:shadow-lg relative product-card scale-100 hover:scale-105">
        <img
          src="https://i.ibb.co/0mRnKbH/hero-1.png"
          className="h-[35vh] w-full rounded-t-md"
          alt=""
        />
        <div
          className=" absolute right-3 product-hover-btns transition-all"
          style={{ top: "47%", transform: "translateY(-50%)" }}
        >
          <div className="mb-1">
            <button className="bg-slate-200 p-1 rounded-full">
              <ShoppingCartIcon className="text-md" />
            </button>
          </div>

          <div className="mb-1">
            <button className="bg-slate-200 p-1 rounded-full">
              <FavoriteIcon className="text-md" />
            </button>
          </div>

          <div className="mb-1">
            <button
              className="bg-slate-200 p-1 rounded-full"
              onClick={openModal}
            >
              <ViewfinderIcon className="text-md" />
            </button>
          </div>

          <Link to="/product-details/sdfsdf">
            <button className="bg-slate-200 p-1 rounded-full">
              <GrFormViewIcon className="text-md" />
            </button>
          </Link>
        </div>
        <div className="text-end px-3 pt-1">
          <ProductRating />
        </div>
        <div className="flex justify-between px-3 pb-3">
          <a href="" className="text-lg font-semibold">
            Fast Food
          </a>
          <h4 className="text-lg font-semibold">
            1000tk{" "}
            <span className="line-through text-sm text-gray-400">900tk</span>
          </h4>
        </div>
      </div>
    </Fragment>
  );
}
