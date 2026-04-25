import React, { memo } from "react";

function ChildWithMemo({ textProps, onClickProps }) {
  console.log("re-render");

  return (
    <div>
      <h1>ChildWithMemo - {textProps ?? "notext"}</h1>
      <button onClick={onClickProps}>Count+</button>
    </div>
  );
}
export default memo(ChildWithMemo);
