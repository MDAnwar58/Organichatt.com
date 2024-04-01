import React from "react";
import { Image } from "@chakra-ui/react";

export default function OfferItems() {
  return (
    <div className="relative rounded-xl border shadow-md">
      <img
        src="https://marketbangla.com/_next/image?url=https%3A%2F%2Fmarketbangla-static.s3-ap-southeast-1.amazonaws.com%2Fbanner%2F6BV2zWeL6iM57EqoCpnoX5.webp&w=3840&q=75"
        alt="Offer Image"
        className="rounded-xl h-[35vh] border-0"
      />
      <div
        className=" absolute z-10"
        style={{ top: "60%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <button className=" bg-yellow-500 hover:bg-yellow-500/80 px-3 py-1 rounded-md">
          OFFER GET NOW
        </button>
      </div>
      <div className="flex justify-between text-gray-500 py-1 px-3">
        <span>End day and time: - </span>
        <span>1d 10: 20: 30</span>
      </div>
    </div>
  );
}
