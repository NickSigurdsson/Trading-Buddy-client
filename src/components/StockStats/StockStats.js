import './StockStats.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';

function StockStats({ticker}){
    const [stockStats, setStockStats] = useState({
        "PERatio": "21.3",
        "BookValue": "3.178",
        "DividendYield": "0.0074",
        "EPS": "6.11",
        "52WeekHigh": "178.8",
        "52WeekLow": "124.17",
        "SharesOutstanding": "15908100000",
        "DividendDate": "2022-11-10",
        "ExDividendDate": "2022-11-04"
    });

    useEffect(()=>{
        axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=3NSM9679F4Z9LTNT`)
        .then(response=>{
            setStockStats( response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },[ticker])
    
    return(
        <div className='dashboard-stock-summary'>
            <h1 className='dashboard-stock-summary__header'>Statistics</h1>
            <section className='dashboard-stock-data'>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>PE</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockStats["PERatio"]}</p>
                </div>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>PBV</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockStats["BookValue"]}</p>
                </div>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>Dividend Yield</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockStats["DividendYield"]}</p>
                </div>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>EPS</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockStats["EPS"]}</p>
                </div>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>52-Week High</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockStats["52WeekHigh"]}</p>
                </div>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>52-Week Low</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockStats["52WeekLow"]}</p>
                </div>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>Dividend Date</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockStats["DividendDate"]}</p>
                </div>
                <div className="dashboard-stock-data__item">
                    <p className='dashboard-stock-data__item-category'>Ex-Dividend Date</p>
                    <p className='dashboard-stock-data__item-category-data'>{stockStats["ExDividendDate"]}</p>
                </div>
            </section>
        </div>
    )
}
export default StockStats;