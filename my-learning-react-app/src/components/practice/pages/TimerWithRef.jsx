import React, { useRef, useState } from "react";

export default function TimerWithRef() {
  const [timer, setTimer] = useState(0);
  const timeRef = useRef(null);
  const start = () => {
    if (timeRef.current !== null) return;
    timeRef.current = setInterval(() => setTimer((pev) => pev + 1), 1000);
  };
  const stop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };
  return (
    <div>
      <button onClick={start}>Bắt đầu</button>
      <h3>{timer}</h3>
      <button onClick={stop}>Dừng lại</button>
    </div>
  );
}
