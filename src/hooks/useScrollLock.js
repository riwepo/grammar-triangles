import { useEffect } from "react";

export function useScrollLock(isLocked) {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [isLocked]);
}
