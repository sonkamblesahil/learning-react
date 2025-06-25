import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  //create state
  //manage state
  //change state
  //give all child the state 
  const [name ,setName] = useState("")


  return (
  <div className='container'>
    <p className='parent'>im inside the parent component and value of name is :{name}</p>
    <Card title ="card1" name ={name} setName={setName}/>
    <Card  title ="card2"  name ={name} setName={setName}/>
  </div>
  )
}

export default App
