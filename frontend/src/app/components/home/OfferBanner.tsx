"use client";
import React from "react";
import Image from "next/image";
import OffPercentBanner from "../../assets/frontend/images/off_banner.jpg";
import OffPercentBanner1 from "../../assets/frontend/images/br1SsEUPxdoSBp3QxH2B8V.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

export default function OfferBanner() {
  return (
    <div className="md:px-10 sm:px-5 px-3 py-5  ">
      {/* <Image
        alt="NextUI hero Image"
        src={OffPercentBanner}
        className=" sm:h-60 h-52 w-full rounded-sm shadow-lg"
        loading="lazy"
      /> */}
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <Image
            className="w-full h-[40vh] rounded-sm shadow-lg"
            src={OffPercentBanner}
            alt="NextUI hero Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[40vh] rounded-sm shadow-lg"
            src={OffPercentBanner1}
            alt="NextUI hero Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[40vh] rounded-sm shadow-lg"
            src={OffPercentBanner}
            alt="NextUI hero Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[40vh] rounded-sm shadow-lg"
            src={OffPercentBanner}
            alt="NextUI hero Image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
