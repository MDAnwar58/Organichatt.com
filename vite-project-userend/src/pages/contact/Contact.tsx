import React, { Fragment } from "react";
import PageBreadcrumb from "../../components/PageBreadcrumb";
import ContactInformation from "./components/ContactInformation";
import ContactForm from "./components/ContactForm";
import Title from "../../components/Title";

export default function Contact() {
  return (
    <Fragment>
      <Title subTitle="Contact" />
      <PageBreadcrumb pageTitle={"Contact"} />
      <div className="md:px-10 sm:px-5 px-3 pt-10 pb-20">
        <div className="lg:flex gap-5">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </Fragment>
  );
}
