import './Portfolio.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem'
function Portfolio(){

    const [portfolioData, setPortfolioData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/dashboard/portfolio')
        .then(response=>{
            setPortfolioData(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },[])

    return(
        <section className="portfolio">
            <div className="portfolio-header">
                <h1 className='portfolio-header__heading'>Portfolio</h1>
                <button className="portfolio-header__button"> + Add Ticker </button>
            </div>
            <ul className="portfolio-column-titles">
                <li className="portfolio-column-titles__header">Ticker</li>
                <li className="portfolio-column-titles__header">Price</li>
                <li className="portfolio-column-titles__header">% Change</li>
            </ul>
            {portfolioData.map((article)=>{
                const {id,ticker,price} = article;
                return(
                    <PortfolioItem
                    key={id}
                    id={id}
                    ticker={ticker}
                    price={price}
                    />
                )
            })}
        </section>
    )
}
export default Portfolio;