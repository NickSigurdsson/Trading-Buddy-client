import './StockData.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function StockData({ticker}){
    const [stockData, setStockData] = useState([{
        "01. symbol": "AAPL",
        "02. open": "130.2600",
        "03. high": "131.2636",
        "04. low": "128.1200",
        "05. price": "130.7300",
        "06. volume": "63896155",
        "07. latest trading day": "2023-01-10",
        "08. previous close": "130.1500",
        "09. change": "0.5800",
        "10. change percent": "0.4456%"}])

    useEffect(()=>{
        axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=3NSM9679F4Z9LTNT`)
        .then(response=>{
            setStockData( response.data["Global Quote"]);
        })
        .catch(error => {
            console.log(error);
        })
    },[ticker])
    
    return(
        <div className='dashboard-stock-summary'>
            <h1 className='dashboard-stock-summary__header'>Summary</h1>
            <section className='dashboard-stock-data'>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>Open</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockData["02. open"]}</p>
                </div>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>High</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockData["03. high"]}</p>
                </div>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>Low</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockData["04. low"]}</p>

                </div>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>Close</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockData["05. price"]}</p>
                </div>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>Previous Close</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockData["08. previous close"]}</p>
                </div>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>Volume</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockData["06. volume"]}</p>
                </div>
            </section>
        </div>
    )
}
export default StockData;