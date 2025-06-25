import React from 'react'
import './Counter.css'

//taking function as a prop
const Counter = (props) => {
  return (
    <div className='counter'>
      <h1>The count is {props.count}</h1>
      <button className="btn" onClick={props.handleClick}> Click me</button>
    </div>
  )
}

export default Counter
