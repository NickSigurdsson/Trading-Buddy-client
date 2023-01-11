import './StockProfile.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

function StockProfile({ticker}){
    const [stockProfile, setStockProfile] = useState('');

    useEffect(()=>{
        axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=3NSM9679F4Z9LTNT`)
        .then(response=>{
            setStockProfile( response.data["Description"]);
        })
        .catch(error => {
            console.log(error);
        })
    },[ticker])
    return(
        <div className='dashboard-stock-summary'>
            <h1 className='dashboard-stock-summary__header'>Company Profile</h1>
            <p>{stockProfile}</p>
        </div>
    )
}
export default StockProfile;