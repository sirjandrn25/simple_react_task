
import { UseBitcoinContext } from "../context/bitContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = ()=>{
    const {getDetail}  = UseBitcoinContext();
    const params = useParams();
    let filter_data = getDetail(params.detailCode);
 
    return (
        <div style={{'padding':20}}>
            
            <h1>Country Code :  {filter_data.code}</h1>
           
            <h2>Bitcoin Rate : {filter_data.rate}</h2>
            <h3>Description :  {filter_data.description}</h3>


        </div>
    )
}

export default Detail;