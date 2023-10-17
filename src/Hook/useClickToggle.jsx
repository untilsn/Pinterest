import { useEffect, useRef, useState } from "react";

export default function useClickOutside(dom = "button") {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutSide(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return {
    open,
    setOpen,
    dropdownRef,
  };
}
