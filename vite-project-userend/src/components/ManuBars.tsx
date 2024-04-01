import React from "react";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
export default function ManuBars() {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Browse Categories</Tab>
        <Tab>Manus</Tab>
      </TabList>
      <TabPanels>
        <TabPanel className=" bg-white shadow-sm rounded-md mt-3">
          <ul>
            <li>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 1 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul>
                      <li className=" py-1">
                        <a
                          href="/"
                          className="px-5 text-gray-500 hover:text-black transition-all"
                        >
                          Home
                        </a>
                      </li>
                      <li className=" py-1">
                        <a
                          href="/#"
                          className="px-5 text-gray-500 hover:text-black transition-all"
                        >
                          Products
                        </a>
                      </li>
                      <li className=" py-1">
                        <a
                          href="/about"
                          className="px-5 text-gray-500 hover:text-black transition-all"
                        >
                          About
                        </a>
                      </li>
                      <li className=" py-1">
                        <a
                          href="/contact"
                          className="px-5 text-gray-500 hover:text-black transition-all"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </li>
            <li>
              <Accordion>
                <AccordionItem>
                  <a href="">
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className=" border-0"
                      >
                        Foods
                      </Box>
                    </AccordionButton>
                  </a>
                </AccordionItem>
              </Accordion>
            </li>
            <li>
              <Accordion>
                <AccordionItem>
                  <a href="">
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Medical Tools
                      </Box>
                    </AccordionButton>
                  </a>
                </AccordionItem>
              </Accordion>
            </li>
            <li>
              <Accordion>
                <AccordionItem>
                  <a href="">
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Electronics
                      </Box>
                    </AccordionButton>
                  </a>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
        </TabPanel>
        <TabPanel className=" bg-white shadow-sm rounded-md mt-3">
          <ul>
            <li className="mb-3">
              <a
                href="/"
                className="px-5 py-3 text-gray-500 hover:text-black transition-all"
              >
                Home
              </a>
            </li>
            <li className="mb-3">
              <a
                href="/#"
                className="px-5 py-3 text-gray-500 hover:text-black transition-all"
              >
                Products
              </a>
            </li>
            <li className="mb-3">
              <a
                href="/about"
                className="px-5 py-3 text-gray-500 hover:text-black transition-all"
              >
                About
              </a>
            </li>
            <li className="mb-3">
              <a
                href="/contact"
                className="px-5 py-3 text-gray-500 hover:text-black transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
