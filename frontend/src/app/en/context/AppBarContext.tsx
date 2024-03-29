"use client";
import {useState} from "react";

export const AppBarContext = () => {
  const [toggleManuBarStatus, setToggleManuBatStatus] = useState(false);

  const appToggleManuBarHandle = () => {
    if (toggleManuBarStatus === false) {
      setToggleManuBatStatus(true);
    //   alert(toggleManuBarStatus);
    }else{
        setToggleManuBatStatus(false)
    }
  };
  return {
    toggleManuBarStatus,
    appToggleManuBarHandle,
  };
}

export default AppBarContext; 
