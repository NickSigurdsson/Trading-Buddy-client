import Watchlist from '../../components/Watchlist/Watchlist';
import Portfolio from '../../components/Portfolio/Portfolio';
import StockChart from '../../components/StockChart/StockChart';
import NewsList from '../../components/NewsList/NewsList';
import './Dashboard.scss';
function Dashboard(){
    // dashboard/news
    const dashboardNewsList = 'dashboard/news';
    return(
        <>
            <div className='dashboard-overall'>
                <section className="dashboard-container">
                    <Watchlist/>
                    <Portfolio/>
                </section>
                <div className='dashboard-chart-position'>
                    <StockChart/>
                </div>
            </div>
            <NewsList urlModifier={dashboardNewsList}/>
        </>
        
    )
}
export default Dashboard