import React from 'react'
import "./App.css"

import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div className='App-header'>
      
      <Outlet />
    </div>
  )
}

export default App