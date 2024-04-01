import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import PageBreadcrumb from "../../../components/PageBreadcrumb";
import ProductImagesSlider from "./components/ProductImagesSlider";
import ProductInformation from "./components/ProductInformation";
import ProductOthersInformation from "./components/ProductOthersInformation";
import RelatedProducts from "./components/RelatedProducts";
import Title from "../../../components/Title";

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
export default function ProductDetials() {
  return (
    <Fragment>
      <Title subTitle="Product Detials" />
      <PageBreadcrumb pageTitle="Product Detials" />
      <div className="md:px-10 sm:px-5 px-3 sm:pt-10 pt-5 pb-20">
        <div className="md:px-10 sm:flex mx-auto">
          <div className="sm:hidden flex justify-between pb-5">
            <div className="flex">
              <button type="button">{/* <BackArrowIcon /> */}</button>
              <button type="button">{/* <LayoutIcon /> */}</button>
              <button type="button">{/* <ForwardArrowIcon /> */}</button>
            </div>
          </div>
          <div className="md:w-5/12 sm:w-6/12 w-full flex justify-center">
            {/* <ProductImagesSlider images={images} /> */}
            {/* generate a image png image link in img src tag */}
            <img
              src="https://i.ibb.co/0mRnKbH/hero-1.png"
              className="h-[60vh]"
              alt=""
            />
          </div>
          <div className="md:w-7/12 sm:w-6/12 w-full ps-5">
            <div className="sm:flex hidden justify-between">
              <div className="flex">
                <button type="button">{/* <BackArrowIcon /> */}</button>
                <button type="button">{/* <LayoutIcon /> */}</button>
                <button type="button">{/* <ForwardArrowIcon /> */}</button>
              </div>
            </div>
            <ProductInformation />
          </div>
        </div>
        <hr className="mt-10" />
        <ProductOthersInformation />
        <RelatedProducts />
      </div>
    </Fragment>
  );
}
