"use client";
import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <p>index</p>
        <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  )
}
