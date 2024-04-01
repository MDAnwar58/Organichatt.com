import React from "react";
import { Link } from "@nextui-org/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import Slider from "react-slick";
import Product from "../../../../components/Product";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        padding: " 1.5px 0 0 0",
        borderRadius: "100%",
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
        padding: " 1.5px 0 0 0",
        borderRadius: "100%",
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
    slidesToScroll: 5,
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
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <div className="slider-container">
        <Slider {...settings}>
          <div className="px-2">
            <Product />
          </div>
          <div className="px-2">
            <Product />
          </div>
          <div className="px-2">
            <Product />
          </div>
          <div className="px-2">
            <Product />
          </div>
          <div className="px-2">
            <Product />
          </div>
          <div className="px-2">
            <Product />
          </div>
        </Slider>
      </div>
    </div>
  );
}
