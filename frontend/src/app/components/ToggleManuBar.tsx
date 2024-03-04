import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function ToggleManuBar() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="categories" title="Categories">
          <Card>
            <CardBody>
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Accordion 1"
                >
                  <ul>
                    <li className="py-3 border-b border-gray-300">
                      <Link href="/" className="ps-3">
                        Home
                      </Link>
                    </li>
                    <li className="py-3 border-b border-gray-300">
                      <Link href="/products" className="ps-3">
                        Products
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link href="/offers" className="ps-3">
                        Offers
                      </Link>
                    </li>
                  </ul>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Accordion 2"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Accordion 3"
                >
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="manus" title="Munus">
          <Card>
            <CardBody>
              <ul>
                <li className="py-3 border-b border-gray-300">
                  <Link href="/" className="">
                    Home
                  </Link>
                </li>
                <li className="py-3 border-b border-gray-300">
                  <Link href="/products" className="">
                    Products
                  </Link>
                </li>
                <li className="py-3 border-b border-gray-300">
                  <Link href="/offers" className="">
                    Offers
                  </Link>
                </li>
                <li className="py-3">
                  <Link href="/contact" className="">
                    Contact
                  </Link>
                </li>
              </ul>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
