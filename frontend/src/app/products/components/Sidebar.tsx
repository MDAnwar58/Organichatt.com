import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import CategoryList from "./CategoryList";
import RatingList from "./RatingList";
import PriceCheckList from "./PriceCheckList";
import PriceRange from "./PriceRange";

export default function Sidebar() {
  return (
    <div>
      <Card>
        <CardHeader className="flex">Categories</CardHeader>
        <Divider />
        <CardBody>
          <CategoryList />
        </CardBody>
        <Divider />
        <div className="px-3 py-2 text-start">Avg Customer Review</div>
        <Divider />
        <Divider />
        <CardBody>
          <RatingList />
        </CardBody>
        <Divider />
        <Divider />
        <div className="px-3 py-2 text-start">Price</div>
        <Divider />
        <Divider />
        <CardBody>
          <PriceCheckList />
          <PriceRange />
        </CardBody>
      </Card>
    </div>
  );
}
