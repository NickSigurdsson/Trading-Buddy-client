import './Watchlist.scss';
import WatchlistItem from '../WatchlistItem/WatchlistItem';
// import AddWatchlist from '../AddWatchlist/AddWatchlist';
import {useState, useEffect} from 'react';
import axios from 'axios';
function Watchlist(){
    // set the modal to false won't show until the button is pressed
    // const [showModal, setShowModal] = useState(false);
    const [watchlistData, setWatchlistData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/dashboard/watchlist')
        .then(response=>{
            setWatchlistData(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },[])

    return(
        <section className="watchlist">
            <div className="watchlist-header">
                <h1 className='watchlist-header__heading'>Watchlist</h1>
                <button className="watchlist-header__button" onClick={()=>{console.log('buttonworks')}}> 
                    + Add to Watchlist 
                </button>
            </div>
            <ul className="watchlist-column-titles">
                <li className="watchlist-column-titles__header">Ticker</li>
                <li className="watchlist-column-titles__header">Price</li>
                <li className="watchlist-column-titles__header">% Change</li>
            </ul>
            {watchlistData.map((article)=>{
                const {id,ticker,price} = article;
                return(
                    <WatchlistItem
                    key={id}
                    id={id}
                    ticker={ticker}
                    price={price}
                    />
                )
            })}
            {/* <AddWatchlist showModal={showModal}/> */}
        </section>
    )
}
export default Watchlist;