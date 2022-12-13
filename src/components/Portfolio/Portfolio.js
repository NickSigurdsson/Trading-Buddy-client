import './Portfolio.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Portfolio(){

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