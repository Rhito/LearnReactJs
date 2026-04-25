import React, { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const counterFunc = () => setCount((pev) => pev + 1);
  useEffect(() => {
    const intervalId = setInterval(counterFunc, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <h2>Counter: {count}</h2>
    </div>
  );
}
