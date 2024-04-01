import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SpecialOffer() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    fade: true,
  };
  return (
    <div className="px-10 py-10">
      <div className="slider-container">
        <Slider {...settings}>
          <a href="">
            <img
              src="https://i.ibb.co/0mRnKbH/hero-1.png"
              className="w-full h-[40vh] rounded-xl"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://i.ibb.co/0mRnKbH/hero-1.png"
              className="w-full h-[40vh] rounded-xl"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://i.ibb.co/0mRnKbH/hero-1.png"
              className="w-full h-[40vh] rounded-xl"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://i.ibb.co/0mRnKbH/hero-1.png"
              className="w-full h-[40vh] rounded-xl"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://i.ibb.co/0mRnKbH/hero-1.png"
              className="w-full h-[40vh] rounded-xl"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://i.ibb.co/0mRnKbH/hero-1.png"
              className="w-full h-[40vh] rounded-xl"
              alt=""
            />
          </a>
        </Slider>
      </div>
    </div>
  );
}
