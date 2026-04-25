import React, { useState } from "react";

export default function TodoList() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const handleClick = () => {
    if (!text) return;
    setList((pev) => [...pev, text]);
    setText("");
  };
  const displayList = list.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <div>
      <ul>{displayList}</ul>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
