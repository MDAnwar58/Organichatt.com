"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import PriceRange from "./PriceRange";
import Rates from "./Rates";
import ProductGrid from "./ProductGrid";
import PagePagination from "./Pagination";
import PageBreadcrumb from "../../../components/PageBreadcrumb";
import NextUIProviderComponent from "../../../components/NextUIProviderComponent";

export default function ProductContent({ title }: { title?: any }) {
  const [sideNavigation, setSideNavigation] = useState(false);
  const dropdownRef = useRef(null);

  const sideNavigationOpeningHandle = () => {
    setSideNavigation(!sideNavigation);
  };
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.pointerType !== "mouse"
    ) {
      setSideNavigation(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <PageBreadcrumb
        pageTitle={title}
        sideNavigationOpeningHandle={sideNavigationOpeningHandle}
        sideNavigation={sideNavigation}
      />
      <div className="py-10 flex px-10">
        <div
          className={`lg:w-[20%] md:w-[25%] w-[40%] md:block ${
            sideNavigation === false
              ? "hidden"
              : "absolute sm:top-[10.5em] top-[12em] right-[5em] z-20"
          }`}
          ref={dropdownRef}
        >
          <div className="bg-slate-50 shadow-md border-1 border-gray-200 rounded-md pb-1 h-auto">
            <div className=" bg-slate-100 rounded-t-md border-b-1 border-gray-300 px-5 py-2 text-xl font-semibold">
              Categories
            </div>
            <ul className="mb-3">
              <li>
                <a href="" className="">
                  <div className="  bg-gray-200 px-5 py-1">Food</div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="px-5 py-1 hover:bg-gray-200">Food</div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="px-5 py-1 hover:bg-gray-200">Food</div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="px-5 py-1 hover:bg-gray-200">Food</div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="px-5 py-1 hover:bg-gray-200">Food</div>
                </a>
              </li>
            </ul>

            <div className=" bg-slate-100 border-y-1 border-gray-300 px-5 py-2 text-xl font-semibold">
              Collections
            </div>
            <ul className="mb-3">
              <li>
                <a href="" className="">
                  <div className="  bg-gray-200 px-5 py-1">
                    Winter Conllection
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="  hover:bg-gray-200 px-5 py-1">
                    Winter Conllection
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="  hover:bg-gray-200 px-5 py-1">
                    Winter Conllection
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="  hover:bg-gray-200 px-5 py-1">
                    Winter Conllection
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="  hover:bg-gray-200 px-5 py-1">
                    Winter Conllection
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="  hover:bg-gray-200 px-5 py-1">
                    Winter Conllection
                  </div>
                </a>
              </li>
            </ul>

            <div className=" bg-slate-100 border-y-1 border-gray-300 px-5 py-2 text-xl font-semibold">
              Rating
            </div>
            <ul className="mb-3">
              <li>
                <a href="" className="">
                  <div className="  bg-gray-200 px-5 py-1">
                    <Rates rate={2} />
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="  hover:bg-gray-200 px-5 py-1">
                    <Rates rate={3} />
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="  hover:bg-gray-200 px-5 py-1">
                    <Rates rate={4} />
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="  hover:bg-gray-200 px-5 py-1">
                    <Rates rate={5} />
                  </div>
                </a>
              </li>
            </ul>

            <div className=" bg-slate-100 border-y-1 border-gray-300 px-5 py-2 text-xl font-semibold">
              Price Range
            </div>
            <ul className="mb-3">
              <li>
                <a href="" className="">
                  <div className="  bg-gray-200 px-5 py-1">
                    Price 1000 - 1500tk
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="  hover:bg-gray-200 px-5 py-1">
                    Price 1500 - 2000tk
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="  hover:bg-gray-200 px-5 py-1">
                    Price 2000 - 2500tk
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="">
                  <div className="  hover:bg-gray-200 px-5 py-1">
                    Price 2500 - 3000tk
                  </div>
                </a>
              </li>
              <li className=" px-4">
                <PriceRange />
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-[80%] md:w-[75%] w-[100%] px-5">
          <ProductGrid />
          <div className="flex justify-between items-center pt-3">
            <div className=" text-slate-500 flex">
              <span className="text-sm me-2">Showing 1-12 of 12</span>
              <span className="text-sm">Items - 12</span>
            </div>
            <NextUIProviderComponent>
              <PagePagination />
            </NextUIProviderComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
