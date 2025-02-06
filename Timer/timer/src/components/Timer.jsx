import { useRef, useState } from "react";

export function Timer() {
  let [time, settime] = useState(0);
  let [runnig, setrunnig] = useState(false);
  let ref = useRef(null);

  function handlestart() {
    if (!ref.current && time == 0) {
      ref.current = setInterval(() => {
        settime((pre) => pre + 10);
      }, 10);
      setrunnig(true);
    }
  }

  function handlepause() {
    clearInterval(ref.current);
    ref.current = null;
    setrunnig(false);
  }

  function handlereset() {
    settime(0);
    clearInterval(ref.current);
    ref.current = null;
    setrunnig(false);
  }

  function handleresume() {
    if (!ref.current && time > 0) {
      ref.current = setInterval(() => {
        settime((pre) => pre + 10);
      }, 10);
      setrunnig(true);
    }
  }

  let hr = Math.floor(time / 3600000);
  let min = Math.floor((time % 360000) / 60000);
  let sec = Math.floor((time % 60000) / 1000);
  let ml = Math.floor((time % 1000) / 10);

  return (
    <>
      <h1>Timer</h1>
      <h1>
        {String(hr).padStart(2, "0")}:{String(min).padStart(2, "0")}:
        {String(sec).padStart(2, "0")}:{String(ml).padStart(2, "0")}
      </h1>
      <button onClick={handlestart}>Start</button>
      <button onClick={runnig ? handlepause : handleresume}>
        {runnig ? "Pause" : "Resume"}
      </button>
      <button onClick={handlereset}>Reset</button>
    </>
  );
}
