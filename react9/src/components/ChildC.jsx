import React,{useContext} from 'react'
import { themeContext, userContext} from '../App'
const ChildC = () => {
   
    const user = useContext(userContext)

    const [theme,setTheme] = useContext(themeContext)

    const handleClick=()=>{
        if(theme==="dark"){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }
  return (
    <div>
      {/* {user.name} */}
      <button onClick={handleClick}>
        Change Theme
      </button>
      <p>name:{user.name}</p>
    </div>
  )
}

export default ChildC
