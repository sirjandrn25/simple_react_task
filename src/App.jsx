import React from 'react'
import "./App.css"
import { UseBitcoinContext } from './context/bitContext'
import { Outlet } from 'react-router-dom'

const App = () => {
  const {fetchData} = UseBitcoinContext();
  React.useEffect(()=>{
    fetchData();
    setInterval(()=>{
      // console.log("fetching")
      fetchData();
    },10000);

  },[]);
  return (
    <div className='App-header'>
      
      <Outlet />
    </div>
  )
}

export default App
