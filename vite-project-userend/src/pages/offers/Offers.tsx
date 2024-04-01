import React from "react";
import OfferItems from "./components/OfferItems";
import PageBreadcrumb from "../../components/PageBreadcrumb";
import LoadMoreBtn from "./components/LoadMoreBtn";
import Title from "../../components/Title";

export default function Offers() {
  return (
    <>
      <Title subTitle="Offers" />
      <PageBreadcrumb pageTitle={"Offers"} />
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
    </>
  );
}
