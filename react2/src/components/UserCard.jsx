import React from 'react'
import './UserCard.css'
import  reactlogo from '../assets/react.svg'
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>

      <p id='username' >{props.name}</p>
      <img id='userimg' src= {reactlogo} alt="" />
      <p id='userdesc'>{props.desc}</p>

    </div>
  )
}

export default UserCard
