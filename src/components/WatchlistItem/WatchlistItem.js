import './WatchlistItem.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
function WatchlistItem({ticker,price}){
    const [priceQuote, setPriceQuote] = useState('default')
    useEffect(()=>{
        axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=3NSM9679F4Z9LTNT`)
        .then(response=>{
            setPriceQuote(response.data["Global Quote"]["10. change percent"]);
        })
        .catch(error => {
            console.log(error);
        })

    },[ticker])

    return(
        <ul className="watchlist-item">
            <li className="watchlist-item__data">{ticker}</li>
            <li className="watchlist-item__data">{price}</li>
            <li className="watchlist-item__data-price">{priceQuote}</li>
        </ul>
    )
}
export default WatchlistItem;