import React, { useState } from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { Rating } from "flowbite-react";
import Ratings from "./Ratings";

export default function RatingList() {
  const [ratingValues, setRatingValues] = useState("5");
  const RatingCheckHandle = (RatingValue) => {
      setRatingValues(RatingValue);
  };
  return (
    <CheckboxGroup value={ratingValues}>
      <Checkbox value="5" onValueChange={() => RatingCheckHandle("5")}>
        <Ratings rating={5} />
      </Checkbox>
      <Checkbox value="4" onValueChange={() => RatingCheckHandle("4")}>
        <Ratings rating={4} />
      </Checkbox>
      <Checkbox value="3" onValueChange={() => RatingCheckHandle("3")}>
        <Ratings rating={3} />
      </Checkbox>
      <Checkbox value="2" onValueChange={() => RatingCheckHandle("2")}>
        <Ratings rating={2} />
      </Checkbox>
      <Checkbox value="1" onValueChange={() => RatingCheckHandle("1")}>
        <Ratings rating={1} />
      </Checkbox>
    </CheckboxGroup>
  );
}
