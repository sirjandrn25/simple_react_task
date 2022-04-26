import React, { useState } from 'react'
import { UseBitcoinContext } from '../context/bitContext';
import { Link,Outlet,useSearchParams } from 'react-router-dom';

const Details = () => {
 
    const {loading,fetchData,data,error,searchData} = UseBitcoinContext();
    let [searchParams, setSearchParams] = useSearchParams();
    const handleSearch = (e)=>{
        const country_code = e.target.value;
        
        if(country_code){
            searchData(country_code);
            setSearchParams({country_code})
        }else{
            setSearchParams({})
            fetchData();
        }
    }
  return (
      <>
        <Link to="/" style={{display:"block"}} >Back To Home</Link>
        <br />
        <br />
    <div style={{'display':'flex'}}>
        
                
        
        {loading?"loading......":
        <nav style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}>
              <input
            value={searchParams.get("country_code") || ""}
            onChange={handleSearch}
          />
              {data.map(d=>d.code).sort().map(code=>{
                  return <Link to={`/details/${code}/`} key={code} style={{display:"block",margin:"5px"}} >{code} </Link> 
              })}
          </nav>}

            
    
        
       

        <Outlet />
    </div>
    </>
  )
}



export default Details
