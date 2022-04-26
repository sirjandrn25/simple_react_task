import React, { useContext } from 'react';


const BitcoinContext = React.createContext({
    loading:false,
    data:[],
    time:{},
    error:'',
    fetchData: ()=>{},
    getDetail:()=>{},
    searchData:()=>{}
    
})

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export const BitCoinProvider = ({children})=>{
    const [data,setData] = React.useState([]);
    const [loading,setLoading] = React.useState(false)
    const [error,setError] = React.useState('')
    const [time,setTime] = React.useState({});
   
    
    const fetchData = async()=>{
        return await fetch(url).then(resp=>resp.json()).then(json_res=>{
            // console.log(json_res)
            const data = json_res.bpi
            setData(Object.values(data));
            setTime(json_res.time);
            return true
        }).catch(error=>{
            setError(error);
            return false
        })
        
    }

    const getDetail = (code)=>{

        // setCurrData(data.filter(d=>d.code===code)[0])
        const d = data.filter(d=>d.code===code)
        return d[0]
        

    }
    const searchData=(search_value)=>{
        
        
        setData(data.filter(d=>d.code.toLowerCase().startsWith(search_value.toString())));
    }

    return (
        <BitcoinContext.Provider value={{data,loading,error,fetchData,time,getDetail,searchData}} >
            {children}
        </BitcoinContext.Provider>
    )
}


export const UseBitcoinContext = ()=>{
    const {data,loading,error,fetchData,time,getDetail,searchData} = React.useContext(BitcoinContext);

    return {data,loading,error,fetchData,getDetail,searchData};
}