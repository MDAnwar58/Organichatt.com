"use client";
import React, { useRef } from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { Button } from "react-responsive-button";
import "react-responsive-button/dist/index.css";
// import ProductImageZoom from "./ProductImageZoom";

export default function ProductImagesSlider({ images }:{images?: Array<any>}) {
  const carouselRef = useRef(null);

  return (
    <section
      className="section h-[69vh]"
      aria-labelledby="example5"
    >
      <Carousel ref={carouselRef} images={images} />
    </section>
  );
}
