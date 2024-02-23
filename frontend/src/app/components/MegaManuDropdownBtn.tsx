"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {
  Activity,
  ChevronDown,
  Flash,
  Lock,
  ManuBarIcon,
  Scale,
  Server,
  TagUser,
} from "./Icons";

export default function MegaManuDropdownBtn() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          color="dark"
          size="md"
          className="border-transparent"
          endContent={icons.chevron}
        >
          <ManuBarIcon className="text-white" fill="currentColor" size={30} />
          Browse Categories
          <ChevronDown fill="currentColor" size={16} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="autoscaling"
          description="ACME scales apps to meet user demand, automagically, based on load."
          startContent={icons.scale}
        >
          Autoscaling
        </DropdownItem>
        <DropdownItem
          key="usage_metrics"
          description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
          startContent={icons.activity}
        >
          Usage Metrics
        </DropdownItem>
        <DropdownItem
          key="production_ready"
          description="ACME runs on ACME, join us and others serving requests at web scale."
          startContent={icons.flash}
        >
          Production Ready
        </DropdownItem>
        <DropdownItem
          key="99_uptime"
          description="Applications stay on the grid with high availability and high uptime guarantees."
          startContent={icons.server}
        >
          +99% Uptime
        </DropdownItem>
        <DropdownItem
          key="supreme_support"
          description="Overcome any challenge with a supporting team ready to respond."
          startContent={icons.user}
        >
          +Supreme Support
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
