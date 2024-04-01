import React from "react";
import { Pagination } from "@nextui-org/react";

export default function PagePagination() {
  return <Pagination showControls total={10} initialPage={1} color="success" />;
}
