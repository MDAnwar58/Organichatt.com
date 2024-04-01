import React, { useState } from "react";
import CollectionHeader from "./CollectionHeader";
import "../../../assets/css/collection-slick-slider.css";
import Slider from "react-slick";
import Product from "../../../components/Product";
import ProductDetailsModal from "../../../components/ProductDetailsModal";

export default function Collection() {
  const [modalOpenOrClose, setModalOpenOrClose] = useState(false);
  const openModal = () => {
    setModalOpenOrClose(true);
  };
  const closeModal = () => {
    setModalOpenOrClose(false);
  };
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-10 pb-10 product-collection">
      <CollectionHeader />
      <Slider {...settings}>
        <div className="px-3">
          <Product openModal={openModal} />
        </div>
        <div className="px-3">
          <Product openModal={openModal} />
        </div>
        <div className="px-3">
          <Product openModal={openModal} />
        </div>
        <div className="px-3">
          <Product openModal={openModal} />
        </div>
        <div className="px-3">
          <Product openModal={openModal} />
        </div>
        <div className="px-3">
          <Product openModal={openModal} />
        </div>
        <div className="px-3">
          <Product openModal={openModal} />
        </div>
        <div className="px-3">
          <Product openModal={openModal} />
        </div>
        <div className="px-3">
          <Product openModal={openModal} />
        </div>
        <div className="px-3">
          <Product openModal={openModal} />
        </div>
        <div className="px-3">
          <Product openModal={openModal} />
        </div>
        <div className="px-3">
          <Product openModal={openModal} />
        </div>
      </Slider>
      <ProductDetailsModal
        modalOpenOrClose={modalOpenOrClose}
        closeModal={closeModal}
      />
    </div>
  );
}
