import { useEffect, useState } from "react";

export default function useBodyScrollLock() {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";

    // Cleanup function to reset the overflowY property when the component unmounts
    return () => {
      bodyStyle.overflowY = "auto";
    };
  }, [isLocked]);

  const scrollLockOrUnlock = () => {
    setIsLocked(!isLocked);
  };

  return { scrollLockOrUnlock };
}
