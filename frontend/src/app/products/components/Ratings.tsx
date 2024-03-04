import React from "react";
import { Rating } from "flowbite-react";

export default function Ratings({ rating }) {
  let ratingValues;

  if (rating === 5) {
    ratingValues = (
      <>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
      </>
    );
  } else if (rating === 4) {
    ratingValues = (
      <>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
      </>
    );
  } else if (rating === 3) {
    ratingValues = (
      <>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <Rating.Star filled={false} />
      </>
    );
  } else if (rating === 2) {
    ratingValues = (
      <>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <Rating.Star filled={false} />
        <Rating.Star filled={false} />
      </>
    );
  } else {
    ratingValues = (
      <>
        <Rating.Star />
        <Rating.Star filled={false} />
        <Rating.Star filled={false} />
        <Rating.Star filled={false} />
        <Rating.Star filled={false} />
      </>
    );
  }

  return <Rating>{ratingValues}</Rating>;
}
