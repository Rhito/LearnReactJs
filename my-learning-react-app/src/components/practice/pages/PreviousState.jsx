import React, { useEffect, useRef, useState } from "react";

export default function PreviousState() {
  const [count, setCount] = useState(0);
  const pevCountRef = useRef(0);
  useEffect(() => {
    pevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <h2>Số hiện tại là: {count}</h2>
      <h3>Số trước đó là: {pevCountRef.current}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
    </div>
  );
}
