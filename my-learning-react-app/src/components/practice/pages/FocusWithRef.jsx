import React, { useRef } from "react";

export default function FocusWithRef() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
