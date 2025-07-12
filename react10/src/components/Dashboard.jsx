import React from 'react'
import { Outlet } from 'react-router-dom'
const dashboard = () => {
  return (
    <div>
      dashboard
      <Outlet/>
    </div>
  )
}

export default dashboard
