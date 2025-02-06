import React, { useState, useEffect } from "react";
import UseDebounce from "./Usedebounce"; 

export function Onclick() {
  const [click, setClick] = useState("");
  const debouncedClick = UseDebounce(click, 2000); 

  useEffect(() => {
    if (debouncedClick) {
      handleClick();
    }
  }, [debouncedClick]);

  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <>
      <button onClick={() => setClick("Clicked!")}>Click</button>
    </>
  );
}
