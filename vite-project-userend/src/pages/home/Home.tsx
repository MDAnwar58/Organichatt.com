import React from "react";
import Hero from "./components/Hero";
import OurCategories from "./components/OurCategories";
import SpecialOffer from "./components/SpecialOffer";
import Collection from "./components/Collection";
import Title from "../../components/Title";

export default function Home() {
  return (
    <div>
      <Title />
      <Hero />
      <OurCategories />
      <SpecialOffer />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
    </div>
  );
}
