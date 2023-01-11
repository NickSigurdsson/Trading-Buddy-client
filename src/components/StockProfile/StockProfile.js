import './StockProfile.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

function StockProfile({ticker}){
    const [stockProfile, setStockProfile] = useState('');

    useEffect(()=>{
        axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=3NSM9679F4Z9LTNT`)
        .then(response=>{
            setStockProfile(response.data);
        })
        .catch(error => {
            console.log("Unable to obtain stock profile!");
        })
    },[ticker])
    return(
        <div className='dashboard-stock-profile'>
            <h1 className='dashboard-stock-profile__header'>Company Profile</h1>
            <p className='dashboard-stock-profile__paragraph'>{stockProfile["Description"]}</p>
        </div>
    )
}
export default StockProfile;