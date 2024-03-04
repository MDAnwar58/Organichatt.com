"use client";
import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function PageBreadcrumbs() {
  return (
    <Breadcrumbs size="md">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Product</BreadcrumbItem>
      <BreadcrumbItem>Product Name</BreadcrumbItem>
    </Breadcrumbs>
  );
}
