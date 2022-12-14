import './Portfolio.scss';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
function Portfolio(){
    // const [portfolioData, setPortfolioData] = useState([]);
    // use this use effect to grab the data of the knex database along with the axios information its getting from the API (to make a full array to send here and later mapped to make portfolio items)
    // useEffect(()=>{

    // })

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
            <ul className="portfolio-item">
                <li className="portfolio-item__data">AAPL</li>
                <li className="portfolio-item__data">148.56</li>
                <li className="portfolio-item__data-price">5.1%</li>
            </ul>
        </section>
    )
}
export default Portfolio;