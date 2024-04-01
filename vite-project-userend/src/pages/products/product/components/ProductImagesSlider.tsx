import React, { useRef } from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
// import ProductImageZoom from "./ProductImageZoom";

export default function ProductImagesSlider({
  images,
}: {
  images?: Array<any>;
}) {
  const carouselRef = useRef(null);
  // const images = [9, 8, 7, 6, 5].map((number) => ({
  //   src: `https://placedog.net/${number}00/${number}00?id=${number}`,
  // }));
  return (
    <section className="section h-[69vh]" aria-labelledby="example5">
      <Carousel ref={carouselRef} images={images} />
    </section>
  );
}
