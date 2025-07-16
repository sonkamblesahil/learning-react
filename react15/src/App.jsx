import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './components/ChildComponent'

function App() {
  const [count, setCount] = useState(0)

  const handleClick=useCallback(()=>{
    setCount(count+1)
  },[count])
  
  return (
   <div>
    <div>
      Count:{count}

    </div>
    <div>
      <button onClick={handleClick}>increment button</button>
    </div>

    <div>
      <ChildComponent buttonName="click me" handleClick={handleClick}/>
    </div>
   </div>
  )
}

export default App
