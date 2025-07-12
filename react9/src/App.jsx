import { createContext } from 'react'
import { useState } from 'react'
import ChildA from './components/ChildA';
import './App.css';

//create context
const userContext = createContext();
const themeContext = createContext();
//wrap all the child inside the provider
//pass the value
//consumer ke andar jake include kardo


function App() {
  
  const [user,setUser] = useState({name:"sahil"})
  const [theme , setTheme] = useState("light")


  return (
    <>
    <div>
      <userContext.Provider value={user}>
        

     <themeContext.Provider value={[theme,setTheme]}> 
      <div id ="container" style={{backgroundColor:theme=='light'?"white":'black', color:theme=='light'?"black":"white"}}>

      <ChildA/>
      </div>
     </themeContext.Provider>

     </userContext.Provider>
        
    </div>
    
    </>
  )
}

export default App
export {userContext}
export {themeContext}
