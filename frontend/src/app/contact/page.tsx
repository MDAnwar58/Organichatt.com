"use client";
import React from "react";
import PageBreadcrumbs from "../components/PageBreadcrumbs";
import { Button, Card, CardBody, Divider, Textarea } from "@nextui-org/react";
import Link from "next/link";
import ContactInformation from "./components/ContactInformation";
import ContactForm from "./components/ContactForm";
import FrontendLayout from "../layouts/FrontendLayout";

export default function ContactPage() {
  return (
    <FrontendLayout>
      <PageBreadcrumbs pageBreadcrumbsName={"Contact"} />
      <div className="md:px-10 sm:px-5 px-3 pt-10 pb-20">
        <div className="lg:flex gap-5">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </FrontendLayout>
  );
}
