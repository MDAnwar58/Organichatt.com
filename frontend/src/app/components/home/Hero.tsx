"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import hero1 from "../../assets/frontend/images/br1SsEUPxdoSBp3QxH2B8V.jpg";
import hero2 from "../../assets/frontend/images/c5cf46a8-b10c-43c8-a60e-6692838cdee1_4.jpg";
import hero3 from "../../assets/frontend/images/c5cf46a8-b10c-43c8-a60e-6692838cdee1_5.jpg";
import hero4 from "../../assets/frontend/images/ecd45179-4b86-4a34-b245-0078e022db5a_1.jpg";
import hero5 from "../../assets/frontend/images/Green Order Online Instagram Post.png";
import { Button } from "@nextui-org/react";

export default function Hero() {
  const height = {
    height: "70vh",
  };
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="relative">
        <Image
          className="w-full"
          style={height}
          alt="NextUI hero Image"
          src={hero1}
        />
        <Button
          className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-30 text-white"
          color="success"
          size="lg"
        >
          Buy Now
        </Button>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image
          className="w-full"
          style={height}
          alt="NextUI hero Image"
          src={hero2}
        />

        <Button
          className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-30 text-white"
          color="warning"
          size="lg"
        >
          Buy Now
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="w-full"
          style={height}
          alt="NextUI hero Image"
          src={hero3}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="w-full"
          style={height}
          alt="NextUI hero Image"
          src={hero4}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="w-full"
          style={height}
          alt="NextUI hero Image"
          src={hero5}
        />
      </SwiperSlide>
    </Swiper>
  );
}
