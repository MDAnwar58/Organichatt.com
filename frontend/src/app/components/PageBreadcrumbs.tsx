import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from 'next/link';

export default function PageBreadcrumbs({ pageBreadcrumbsName }) {
  return (
    <Breadcrumbs
      separator="/"
      itemClasses={{
        separator: "px-2",
      }}
      className="px-10 py-10 shadow-sm text-xl"
    >
      <BreadcrumbItem>
        <Link href="/">Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>{pageBreadcrumbsName}</BreadcrumbItem>
    </Breadcrumbs>
  );
}