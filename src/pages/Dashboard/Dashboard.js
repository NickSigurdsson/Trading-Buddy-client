import Watchlist from '../../components/Watchlist/Watchlist';
import Portfolio from '../../components/Portfolio/Portfolio';
import StockChart from '../../components/StockChart/StockChart';
import NewsList from '../../components/NewsList/NewsList';
import FilterBarr from '../../components/FilterBar/FilterBarr';
import './Dashboard.scss';
import { useState } from 'react';
import StockData from '../../components/StockData/StockData';
import StockProfile from '../../components/StockProfile/StockProfile';
function Dashboard(){
    const dashboardNewsList = 'dashboard/news';
    const [tickerChanger, useTickerChanger] = useState('AAPL')
    return(
        <>
            <div className='dashboard-overall'>
                <section className="dashboard-container">
                    <Watchlist/>
                    <Portfolio/>
                </section>
                <FilterBarr
                    tickerUpdate = {useTickerChanger}
                />
                <div className='dashboard-chart-position'>
                    <StockChart
                    ticker = {tickerChanger}
                    />
                </div>
                <div className='dashboard-stock-summary-position'>
                    <StockData ticker = {tickerChanger}/>
                    <StockProfile ticker={tickerChanger}/>
                </div>
            </div>
            <NewsList urlModifier={`${dashboardNewsList}?ticker=${tickerChanger}`} />
        </>
    )
}
export default Dashboard