"use client";
import React from "react";
import { Link } from "@nextui-org/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../index.css";
import Slider from "react-slick";
import Products from "../../../components/home/Products";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
      }}
      onClick={onClick}
    />
  );
}

export default function RelatedProducts() {
  // let sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1225,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative pt-10">
      <div className="flex justify-between items-center pb-3 px-3">
        <h2 className=" text-2xl text-green-500 font-semibold">
          Related Products
        </h2>
        <div className="lg-link">
          <Link href="" className="text-md text-green-500">
            View All
          </Link>
        </div>
      </div>
      <div className="pb-5 text-center sm-link">
        <Link href="" className="text-md text-green-500">
          View All
        </Link>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="px-2">
            <Products />
          </div>
          <div className="px-2">
            <Products />
          </div>
          <div className="px-2">
            <Products />
          </div>
          <div className="px-2">
            <Products />
          </div>
          <div className="px-2">
            <Products />
          </div>
          <div className="px-2">
            <Products />
          </div>
        </Slider>
      </div>
    </div>
  );
}
