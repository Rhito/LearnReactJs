import React, { useState } from 'react'

export default function CountComponent() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>counter: {count}</h1>
        <button onClick={() => setCount(pev => ++pev)}>click to incease</button>
    </div>
  )
}
