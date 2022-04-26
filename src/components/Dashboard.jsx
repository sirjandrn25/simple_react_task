import React from 'react'
import {LineChart, Line, XAxis,YAxis,CartesianGrid } from 'recharts';
import { UseBitcoinContext } from '../context/bitContext';

import { Link } from 'react-router-dom';

const Dashboard = () => {
  const {loading,fetchData,data,error} = UseBitcoinContext();
  
  React.useEffect(()=>{
    fetchData().then(resp=>{
      console.log(resp)
      
    })
  },[])
  
  
  
  return (
    <div>
        <h1>Dashboard Section</h1>
        
            <LineChart data={data} width={600} height={300}  aspect={3} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              
              <Line type="monotone" dataKey="rate_float" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="code" />
              <YAxis />
            </LineChart>
            <br />
            <br />
            <div>
              <Link to="/" >Back To Home</Link>
            </div>
        
    </div>
  )
}





export default Dashboard


