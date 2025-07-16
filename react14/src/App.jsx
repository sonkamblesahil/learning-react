import './App.css'
import React, { useMemo, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function expensiveTask(num) {
    console.log('Running expensive task')
    let result = 0;
    for (let i = 0; i <= 100000000; i++) {
      result += 1; // simulate some work
    }
    return num * 2
  }

  const doubleValue = useMemo(() => expensiveTask(input), [input])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Count is: {count}</div>

      <input
        type='number'
        placeholder='Enter number'
        value={input}
        onChange={(e) => setInput(parseInt(e.target.value))}
      />

      <div>Double Value: {doubleValue}</div>
    </div>
  )
}

export default App
