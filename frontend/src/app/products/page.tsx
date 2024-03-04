"use client";
import React, { useState } from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Products from "../components/home/Products";
import PagePagination from "./components/PagePagination";
import PageBreadcrumbs from "../components/PageBreadcrumbs";
import { CrossIcon, ThreeDotBarIcon } from "../components/Icons";
import { Button } from "@nextui-org/react";
import ProductWithOthers from "./components/ProductWithOthers";
import FrontendLayout from "../layouts/FrontendLayout";

export default function ProductsPage() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const sideBarOpenHandle = () => {
    if (sideBarOpen === false) {
      setSideBarOpen(true);
    } else {
      setSideBarOpen(false);
    }
  };
  return (
    <FrontendLayout>
      <PageBreadcrumbs pageBreadcrumbsName={"Products"} />
      <div className="md:px-10 sm:px-5 px-3 xl:pt-10 pt-5 pb-20 flex">
        <div className=" xl:w-2/12 xl:block hidden ">
          <Sidebar />
        </div>
        <div className=" xl:w-10/12 w-full ps-5">
          <div className="xl:hidden block text-end pb-3 relative">
            <Button size="sm" isIconOnly onPress={sideBarOpenHandle}>
              {sideBarOpen === false ? (
                <ThreeDotBarIcon className={"text-xl"} />
              ) : (
                <CrossIcon className={"text-xl"} />
              )}
            </Button>
            <ProductWithOthers sideBarOpen={sideBarOpen} />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-5 gap-y-5 sm:w-full mx-auto products-content">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
          <div className="sm:flex justify-between items-center pt-5 text-center">
            <div>Page: 1 of 10 Show Items: 20 of 100</div>
            <PagePagination />
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
}
