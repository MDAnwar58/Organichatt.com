import React from "react";	
import Hero from "./components/home/Hero";
import OfferBanner from "./components/home/OfferBanner";
import OurProductCategories from "./components/home/OurProductCategories";
import TrendingProducts from "./components/home/TrendingProducts";
import TrendingProductTitle from "./components/home/TrendingProductTitle";
import MainContent from "./layouts/FrontendLayout";

export default function Home() {
  
  return (
    <MainContent> 
      <Hero />
      <OurProductCategories />
      <OfferBanner />
      {/* <Collection /> */}
      <TrendingProductTitle />
      <TrendingProducts />
      <TrendingProducts />
      <TrendingProducts />
      <TrendingProducts />
      <TrendingProducts />
      <div className=" break-point py-10 w-full"></div>
    </MainContent>
  );
}
