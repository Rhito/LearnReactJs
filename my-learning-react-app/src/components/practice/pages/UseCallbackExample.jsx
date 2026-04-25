import React, { useCallback, useState } from "react";
import ChildWithMemo from "../children/ChildWithMemo";

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const handleCount = useCallback(() => setCount((pev) => pev + 1), []);
  return (
    <div>
      <h2>{count}</h2>
      <ChildWithMemo textProps={"count"} onClickProps={handleCount} />
    </div>
  );
}
