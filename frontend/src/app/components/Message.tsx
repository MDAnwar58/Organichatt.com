import React from 'react'
import { Tooltip } from '@nextui-org/react';
import { SiGooglemessages } from 'react-icons/si';

export default function Message() {
  return (
    <Tooltip
      key={"Message"}
      color={"primary"}
      content={"Message"}
      className="capitalize"
    >
      <div className="fixed bottom-0 end-0 bg-blue-400 me-5 lg:mb-5 mb-16 z-50 rounded-full p-[.2rem]">
        <SiGooglemessages className="text-white text-4xl" />
      </div>
    </Tooltip>
  );
}
