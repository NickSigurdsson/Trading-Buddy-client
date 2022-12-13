import './Watchlist.scss';
function Watchlist(){
    return(
        <section className="watchlist">
            <div className="watchlist-header">
                <h1 className='watchlist-header__heading'>Watchlist</h1>
                <button className="watchlist-header__button"> + Add Ticker </button>
            </div>
            <ul className="watchlist-column-titles">
                <li className="watchlist-column-titles__header">Ticker</li>
                <li className="watchlist-column-titles__header">Price</li>
                <li className="watchlist-column-titles__header">% Change</li>
            </ul>
            <ul className="watchlist-item">
                <li className="watchlist-item__data">AAPL</li>
                <li className="watchlist-item__data">148.56</li>
                <li className="watchlist-item__data-price">5.1%</li>
            </ul>
        </section>
    )
}
export default Watchlist;