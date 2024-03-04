"use client";
import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import FrontendLayout from "../layouts/FrontendLayout";
import EmailSignInForm from "./components/EmailSignInForm";
import PhoneSignInForm from "./components/PhoneSignInForm";
import EmailSignUpForm from "./components/EmailSignUpForm";
import PhoneSignUpForm from "./components/PhoneSignUpForm";

export default function SignIn() {
  const [selected, setSelected] = useState("email");
  const [authWithEmailStatus, setAuthWithEmailStatus] =
    useState("sign-in-with-email");
  const [authWithPhoneStatus, setAuthWithPhoneStatus] =
    useState("sign-in-with-phone");
  const handleTabChange = () => {
    if (selected === "email") {
      setAuthWithPhoneStatus("sign-in-with-phone");
    } else {
      setAuthWithEmailStatus("sign-in-with-email");
    }
  };
  return (
    <FrontendLayout>
      <div className="flex flex-col w-full py-10">
        <Card className="max-w-full w-[340px] mx-auto">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
              onClick={handleTabChange}
            >
              <Tab key="email" title="Email">
                {authWithEmailStatus === "sign-in-with-email" ? (
                  <EmailSignInForm
                    setAuthWithEmailStatus={setAuthWithEmailStatus}
                  />
                ) : (
                  <EmailSignUpForm
                    setAuthWithEmailStatus={setAuthWithEmailStatus}
                  />
                )}
              </Tab>
              <Tab key="phone" title="Phone">
                {authWithPhoneStatus === "sign-in-with-phone" ? (
                  <PhoneSignInForm
                    setAuthWithPhoneStatus={setAuthWithPhoneStatus}
                  />
                ) : (
                  <PhoneSignUpForm
                    setAuthWithPhoneStatus={setAuthWithPhoneStatus}
                  />
                )}
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </FrontendLayout>
  );
}
