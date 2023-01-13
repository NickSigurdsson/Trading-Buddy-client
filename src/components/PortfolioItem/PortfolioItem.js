import './PortfolioItem.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
function PortfolioItem({ticker,price}){
    const [priceQuote, setPriceQuote] = useState('default')
    useEffect(()=>{
        axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=3NSM9679F4Z9LTNT`)
        .then(response=>{
            setPriceQuote(response.data["Global Quote"]["10. change percent"]);
            // console.log(priceQuote);
        })
        .catch(error => {
            console.log(error);
        })
    },[ticker])
    return(
        <>
            <ul className="portfolio-item">
                <li className="portfolio-item__data">{ticker}</li>
                <li className="portfolio-item__data">{price}</li>
                {/* average price */}
                <li className="portfolio-item__data">{price}</li>
                <li className="portfolio-item__data-price">{priceQuote}</li>
            </ul>
        </>
    )
}
export default PortfolioItem;