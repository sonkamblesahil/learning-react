import { useSelector } from 'react-redux'
import './App.css'
import { decrement } from './features/counter/counter'
import { increment } from './features/counter/counter'
import { useDispatch } from 'react-redux'
import { reset } from './features/counter/counter'
import { useState } from 'react'
import { incrementByAmount } from './features/counter/counter'

function App() {
 const [amount,setAmount]  = useState(0) 
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  function handleIncrementClick(){
   dispatch(increment())
  }

  function handleDecrementClick(){
    dispatch(decrement())
  }

  function handleResetClick(){
    dispatch(reset()) // Assuming you have a reset action defined
  }

  function handleIncamountClick(){
    dispatch(incrementByAmount((amount)))
  }

  return (
   <div className='container'>
    <button onClick={handleIncrementClick}>+</button>
    <p>Count: {count}</p>
    <button onClick={handleDecrementClick}>-</button>
    <br />
    <button onClick={handleResetClick}>Reset</button>

    <br/>
    <input type="Number" value={amount} placeholder='Enter amount' onChange={(e)=>{
      setAmount(e.target.value)
    }}/>
     <br />
    <button onClick={handleIncamountClick}>Inc by amount</button>
   
   </div>
  )
}

export default App
