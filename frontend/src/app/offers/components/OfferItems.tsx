import React from 'react'
import { Button, Image } from '@nextui-org/react';

export default function OfferItems() {
  return (
    <div className="relative">
      <Image
        src="https://marketbangla.com/_next/image?url=https%3A%2F%2Fmarketbangla-static.s3-ap-southeast-1.amazonaws.com%2Fbanner%2F6BV2zWeL6iM57EqoCpnoX5.webp&w=3840&q=75"
        alt="Offer Image"
        className="rounded-none h-[35vh]"
      />
      <div className=" absolute z-10" style={{ top: "60%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Button color="warning" size="sm" className="">
          OFFER GET NOW
        </Button>
      </div>
      <div className="flex justify-between">
        <span>End day and time: - </span>
        <span>1d 10: 20: 30</span>
      </div>
    </div>
  );
}
