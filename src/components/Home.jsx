import React from 'react'
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
       <main>
                  BitCoin Detail Show

                  <Link to="/dashboard" >Go To Dashboard Section</Link>
                  <br />
                  <br />
                  <Link to="details">Go To Details</Link>
                </main>
    </div>
  )
}

export default Home
