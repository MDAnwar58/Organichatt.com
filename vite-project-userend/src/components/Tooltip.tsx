import React from "react";
import { ChakraProvider, Tooltip } from "@chakra-ui/react";

export default function ChakraTooltip({
  children,
  bg,
  color,
  label,
  placement,
}: any) {
  return (
    <ChakraProvider>
      <Tooltip bg={bg} color={color} label={label} placement={placement}>
        {children}
      </Tooltip>
    </ChakraProvider>
  );
}
