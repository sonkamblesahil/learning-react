import { useState } from 'react'
import LoginBtn from './components/LoginBtn'
import LogOutbtn from './components/LogOutbtn'

import './App.css'

function App() {
  const [isloggedin, setLoggedin] = useState(true)

  // using if else statement

  if(isloggedin){
     return(
      <div>

        <h1>Welcome to Homepage</h1>
       <LoginBtn/>
      </div>
     )
  }else{
      return(
        <div>

          <h1>Welcome to Homepage</h1>
          <LogOutbtn/>
        </div>
      )
  } 
   
  //ternary operator
  // return(
  //   <div>
  //     {isloggedin?<LoginBtn/>:<LogOutbtn/>}
  //   </div>
  // )

  //loical operaotr
//  return (
//   <div>
//     <h1>Welcome to Homepage</h1>
//     <div>
//       {/* If isloggedin is true, show LogOutbtn */}
//       {isloggedin && <LogOutbtn />}
      
//       {/* If isloggedin is false, show LoginBtn */}
//       {!isloggedin && <LoginBtn />}
//     </div>
//   </div>
// );


}

export default App
