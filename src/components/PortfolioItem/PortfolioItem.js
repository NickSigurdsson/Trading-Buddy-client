import './PortfolioItem.scss';
function PortfolioItem({ticker,price}){
    return(
        <ul className="portfolio-item">
            <li className="portfolio-item__data">{ticker}</li>
            <li className="portfolio-item__data">{price}</li>
            <li className="portfolio-item__data-price">2.25%</li>
        </ul>
    )
}
export default PortfolioItem;