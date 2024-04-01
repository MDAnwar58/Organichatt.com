import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function ProductOthersInformation() {
  const [descirptionTab, setDescirptionTab] = useState(true);
  const [ratingTab, setRatingTab] = useState(false);
  const [productCommentTab, setproductCommentTab] = useState(false);
  const activeColor = "rgb(74, 222, 128)";
  const TabDescirptionHandle = () => {
    if (
      (ratingTab === true && descirptionTab === false) ||
      productCommentTab === true
    ) {
      setRatingTab(false);
      setDescirptionTab(true);
      setproductCommentTab(false);
    }
  };
  const TabRatingHandle = () => {
    if (descirptionTab === true || productCommentTab === true) {
      setDescirptionTab(false);
      setRatingTab(true);
      setproductCommentTab(false);
    }
  };
  const TabCommentHandle = () => {
    if (descirptionTab === true || ratingTab === true) {
      setDescirptionTab(false);
      setRatingTab(false);
      setproductCommentTab(true);
    }
  };
  return (
    <div className="pt-5">
      <Tabs variant="unstyled">
        <TabList>
          <Tab
            bg={descirptionTab === true && activeColor}
            padding=".5rem 1rem"
            border="2px soild"
            borderColor="black"
            borderRadius="10px"
            onClick={TabDescirptionHandle}
          >
            Description
          </Tab>
          <Tab
            bg={ratingTab === true && activeColor}
            padding=".5rem 1rem"
            border="2px soild"
            borderRadius="10px"
            margin=" 0 0 0 5px"
            onClick={TabRatingHandle}
          >
            Rating
          </Tab>
          <Tab
            bg={productCommentTab === true && activeColor}
            padding=".5rem 1rem"
            border="2px soild"
            borderRadius="10px"
            margin=" 0 0 0 5px"
            onClick={TabCommentHandle}
          >
            Product Comments
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
