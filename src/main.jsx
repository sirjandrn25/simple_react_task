import React from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import {BitCoinProvider} from './context/bitContext';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Detail from './components/Detail';

import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>

    <BitCoinProvider>
        <BrowserRouter>
          <Routes >
            <Route path="/" element = {<App />}>
              <Route index element={<Home />}/>
              <Route path="dashboard" element={<Dashboard/>} />
              <Route path= "details" element={<Details />}>
                  <Route index element = {
                    <main>
                      Please select link for detail
                    </main>
                  } />
                  <Route path=":detailCode" element={<Detail />} />
              </Route>

              
            </Route>
          </Routes>
        </BrowserRouter>
        
    </BitCoinProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
