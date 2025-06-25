import { use } from "react"
import "./App.css"
import UserCard from "./components/UserCard.jsx"
function App() {
 

  return (
    <>
    <div className="container">
      <UserCard name="Sahil Sonkamble" desc = "This is Sahil's card" style={{"border-radius":"30px"}}/>
      <UserCard name="Aron Fernandiz" desc = "This is Arons card" style={{"border-radius":"30px"}}/>
    </div>
    </>
  )
}

export default App
