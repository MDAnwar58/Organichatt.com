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
import MegaManus from "./MegaManus";

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
    <Dropdown className=" relative">
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
          startContent={icons.scale}
          className="manus"
        >
          Autoscaling
          <MegaManus />
        </DropdownItem>
        <DropdownItem
          key="usage_metrics"
          startContent={icons.activity}
          className="manus"
        >
          Usage Metrics
          <MegaManus />
        </DropdownItem>
        <DropdownItem
          key="production_ready"
          startContent={icons.flash}
          className="manus"
        >
          Production Ready
        </DropdownItem>
        <DropdownItem
          key="99_uptime"
          startContent={icons.server}
          className="manus"
        >
          +99% Uptime
        </DropdownItem>
        <DropdownItem
          key="supreme_support"
          startContent={icons.user}
          className="manus"
        >
          +Supreme Support
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
