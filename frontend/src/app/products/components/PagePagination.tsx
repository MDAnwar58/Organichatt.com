"use client";
import React from 'react';
import { Pagination } from "@nextui-org/react";

export default function PagePagination() {
  return (
    <div className='sm:block flex justify-center sm:pt-0 pt-3'>
      <Pagination showControls color="success" total={10} initialPage={1} />
    </div>
  );
}
