"use client";
import React, { useEffect, useState } from "react";
import { Rate } from "antd";

export default function Rates({ rate }: any) {
  const [rateStatus, setRateStatus] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRateStatus(true);
    }, 300);
  }, [rateStatus]);
  return rateStatus === true && <Rate disabled defaultValue={rate} />;
}
