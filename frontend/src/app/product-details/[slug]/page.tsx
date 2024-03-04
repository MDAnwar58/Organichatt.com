"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import ProductInformation from "./components/ProductInformation";
import PageBreadcrumbs from "./components/PageBreadcrumbs";
// import Beef from "../../assets/frontend/images/beef.png";
import {
  BackArrowIcon,
  ForwardArrowIcon,
  LayoutIcon,
} from "@/app/components/Icons";
import ProductOthersInformation from "./components/ProductOthersInformation";
import RelatedProducts from "./components/RelatedProducts";
import ProductImagesSlider from "./components/ProductImagesSlider";
import FrontendLayout from "@/app/layouts/FrontendLayout";

const imageIDs = Array(30) // the maximum is currently 149
  .fill(1)
  .map((_, i) => i + 1);
const images = imageIDs.map((imageID) => {
  return {
    src: `https://placedog.net/400/240?id=${imageID}`,
    srcset: `https://placedog.net/400/240?id=${imageID} 400w, https://placedog.net/700/420?id=${imageID} 700w, https://placedog.net/1000/600?id=${imageID} 1000w`,
    sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
    alt: `Dog No. ${imageID}. Dogs are domesticated mammals, not natural wild animals.`,
    thumbnail: `https://placedog.net/100/60?id=${imageID}`,
  };
});

export default function ProductDetails() {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <FrontendLayout>
      {/* <PageBreadcrumbs /> */}
      <div className="md:px-10 sm:px-5 px-3 sm:pt-10 pt-5 pb-20">
        <div className="md:px-10 sm:flex">
          <div className="sm:hidden flex justify-between pb-5">
            <PageBreadcrumbs />
            <div className="flex">
              <button type="button">
                <BackArrowIcon />
              </button>
              <button type="button">
                <LayoutIcon />
              </button>
              <button type="button">
                <ForwardArrowIcon />
              </button>
            </div>
          </div>
          <div className="md:w-5/12 sm:w-6/12 w-full flex justify-center">
            <ProductImagesSlider images={images} />
          </div>
          <div className="md:w-7/12 sm:w-6/12 w-full ps-5">
            <div className="sm:flex hidden justify-between">
              <PageBreadcrumbs />
              <div className="flex">
                <button type="button">
                  <BackArrowIcon />
                </button>
                <button type="button">
                  <LayoutIcon />
                </button>
                <button type="button">
                  <ForwardArrowIcon />
                </button>
              </div>
            </div>
            <ProductInformation />
          </div>
        </div>
        <hr className="mt-10" />
        <ProductOthersInformation />
        <RelatedProducts />
      </div>

      {/* <ProductImageZoom isOpen={isOpen} onOpenChange={onOpenChange} /> */}
    </FrontendLayout>
  );
}
