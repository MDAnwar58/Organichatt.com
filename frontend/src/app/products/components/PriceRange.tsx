import React, { useState } from 'react';
import { Slider } from "@nextui-org/react";

export default function PriceRange() {
  const [priceRange, setPriceRange] = useState([100, 500]);
  return (
    <Slider
      label="Price Range"
      step={50}
      minValue={0}
      maxValue={1000}
      defaultValue={priceRange}
      formatOptions={{ style: "currency", currency: "BDT" }}
      className="max-w-md my-3"
    />
  );
}
