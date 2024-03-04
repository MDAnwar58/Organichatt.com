import React from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export default function PriceCheckList() {
  const [value, setValue] = React.useState("buenos-aires");
  const priceCheckHandle = (value) => {
    setValue(value);
  };
  return (
    <CheckboxGroup value={value}>
      <Checkbox value="buenos-aires">Under TK 1500</Checkbox>
      <Checkbox value="sydney"> TK 1500 to TK 2000</Checkbox>
      <Checkbox value="san-francisco">TK 2000 to TK 3000</Checkbox>
      <Checkbox value="london">More Then TK 4000</Checkbox>
    </CheckboxGroup>
  );
}
