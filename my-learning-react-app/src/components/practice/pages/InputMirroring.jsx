import React, { useState } from 'react'

export default function InputMirroring() {
    const [text, setText] = useState('');
  return (
    <>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <div>{text}</div>
    </>
  )
}
