import React from 'react'
import {useState} from 'react'
import './Count.css'
const Count = () => {
    const [count,setCount] = useState(0)

    const handleCount = ()=>{
        setCount(count +1)
    }

  return (
    <div className='count'>
      <h1>Count is {count}</h1>
      <button className='btn' onClick={handleCount}>
        Click me
      </button>
    </div>
  )
}

export default Count
