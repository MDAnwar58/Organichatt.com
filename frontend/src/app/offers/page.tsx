"use client";
import React from "react";
import PageBreadcrumbs from "../components/PageBreadcrumbs";
import { Button, Image } from "@nextui-org/react";
import OfferItems from "./components/OfferItems";
import LoadMoreBtn from "./components/LoadMoreBtn";
import FrontendLayout from "../layouts/FrontendLayout";

export default function OfferPage() {
  return (
    <FrontendLayout>
      <PageBreadcrumbs pageBreadcrumbsName={"Offers"} />
      <div className="md:px-10 sm:px-5 px-3 pt-10 pb-20">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7">
          <OfferItems />
          <OfferItems />
          <OfferItems />
          <OfferItems />
          <OfferItems />
          <OfferItems />
          <OfferItems />
          <OfferItems />
          <OfferItems />
        </div> 
        <LoadMoreBtn />
      </div>
    </FrontendLayout>
  );
}
