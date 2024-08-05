import React, { useEffect, useRef, useState } from "react";
const Stopwatch = () => {
  const [time, settime] = useState(0);
  const [timerstatus, settimerstatus] = useState(false);

  const timeref = useRef(null);

  useEffect(() => {
    if (timerstatus) {
      timeref.current = setInterval(() => {
        settime((prvtime) => prvtime + 1000);
      }, 1000);
    } else {
      clearInterval(timeref.current);
    }
    return () => clearInterval(timeref.current);
  }, [timerstatus]);

  const starttimer = () => {
    settimerstatus(true);
  };

  const paustimer = () => {
    settimerstatus(false);
  };
const resetimer=()=>{
    settime(0)
    settimerstatus(false)
}
  return (
    <>
      <h1>this is stopwatch component </h1>
      <h1>{time}</h1>

      <button onClick={starttimer}>start</button>
      <button onClick={paustimer}>stop/paus</button>
      <button onClick={resetimer}>reset</button>
    </>
  );
};
export default Stopwatch;
