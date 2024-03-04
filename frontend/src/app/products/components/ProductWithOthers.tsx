import React from 'react';
import Sidebar from './Sidebar';

export default function ProductWithOthers({ sideBarOpen }: { sideBarOpen?: boolean }) {
  return (
    <div className={`${sideBarOpen !== false ? 'block' : 'hidden'} absolute z-20 right-10 top-0`}>
      <Sidebar />
    </div>
  );
}
