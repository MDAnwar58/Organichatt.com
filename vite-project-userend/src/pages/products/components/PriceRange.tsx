import React from "react";
import { Slider, Switch } from "antd";

export default function PriceRange() {
  return (
    <div>
      <Slider range defaultValue={[20, 50]} />
      <div className="flex justify-between -mt-3 px-1">
        <span>0tk</span>
        <span>1000tk</span>
      </div>
    </div>
  );
}
