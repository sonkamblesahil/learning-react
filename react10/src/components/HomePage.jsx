import React from 'react'
import {useNavigate } from 'react-router-dom'
const HomePage = () => {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate('/about')
    }
  return (
    <div>
      HomePage
      <button onClick={handleclick}>go to about</button>
    </div>
  )
}

export default HomePage
