import React, { useEffect, useState } from "react";
import { Rate } from "antd";

export default function ProductRating() {
  const [ratingStatus, setRatingStatus] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRatingStatus(true);
    }, 300);
  }, []);
  return ratingStatus === true && <Rate disabled defaultValue={2} />;
}
