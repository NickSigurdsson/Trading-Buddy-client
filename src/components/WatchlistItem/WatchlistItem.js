import './WatchlistItem.scss'
function WatchlistItem({ticker,price}){
    return(
        <ul className="watchlist-item">
            <li className="watchlist-item__data">{ticker}</li>
            <li className="watchlist-item__data">{price}</li>
            <li className="watchlist-item__data-price">5.1%</li>
        </ul>
    )
}
export default WatchlistItem;