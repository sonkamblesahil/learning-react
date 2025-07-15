import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import './App.css'


function App() {
  // const [count, setCount] = useState(0) //causes re-render on every change


  // // useRef to keep track of the value without causing re-renders
  // // useRef returns a mutable object with a .current property
  // // that can be used to store a value that persists for the full lifetime of the component
  // // It does not trigger a re-render when the value changes
  // // This is useful for keeping track of values that do not need to be displayed in the UI
  // // or for storing values that are used in event handlers or effects
  // // Example: keeping track of the number of times a button has been clicked
  // // without causing the component to re-render every time the button is clicked
  // let val = useRef(0)
  // function handleincrement() {
  //   val.current = val.current + 1
  //   console.log('val is:', val.current)
  //   setCount(count + 1)
  // }
  // // useEffect 
  // useEffect(() => {
  //   console.log('Runs on every render')
  // }, )

  // let btnref = useRef()

  // function changeColor() {
  //   btnref.current.style.backgroundColor = 'red'
  // }

  const [time,setTime]= useState(0)

  let timerref = useRef(null)

  function startTime() {
   timerref.current =  setInterval(()=>{
         setTime(time => time+1)
    },1000);
  }
  function StopTime() {
    clearInterval(timerref.current);
    timerref.current = null; // Clear the reference to the timer
  }
  function resetTime() {
    clearInterval(timerref.current);
    setTime(0);
  }

  
  return (
    
      // <div>
      //   <button  ref ={btnref} onClick={handleincrement}>increment</button>
      //   <br/>
      //   <button onClick={changeColor}>change color if 1st button</button>
      //   <br />
      //   <div>
      //     Count is: {count}
      //   </div>
      // </div>

      <div>
        <div>
          CountDown: {time}
        </div>
        <br />
        <button onClick={startTime}>Start</button>
        <br />
         <button onClick={StopTime}>Stop</button>
        <br />
         <button onClick={resetTime}>Reset</button>
        <br />

      </div>
    
  )
}

export default App
