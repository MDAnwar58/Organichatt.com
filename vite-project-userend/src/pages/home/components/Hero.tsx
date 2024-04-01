import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/css/slick-slider.css";
import Slider from "react-slick";

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };
  const heroImageStyle: React.CSSProperties = {
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60vh",
  };
  return (
    <div className="hero w-full overflow-x-hidden">
      <Slider {...settings}>
        <div>
          <img
            src="https://i.ibb.co/0mRnKbH/hero-1.png"
            style={heroImageStyle}
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/0mRnKbH/hero-1.png"
            style={heroImageStyle}
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/0mRnKbH/hero-1.png"
            style={heroImageStyle}
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/0mRnKbH/hero-1.png"
            style={heroImageStyle}
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/0mRnKbH/hero-1.png"
            style={heroImageStyle}
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/0mRnKbH/hero-1.png"
            style={heroImageStyle}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
