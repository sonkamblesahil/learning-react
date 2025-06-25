import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
      <input type="text" onChange={(e)=>{
        props.setName(e.target.value)
      }} />
      <p>The value of Name state int {props.title} is: {props.name}</p>
    </div>
  )
}

export default Card
