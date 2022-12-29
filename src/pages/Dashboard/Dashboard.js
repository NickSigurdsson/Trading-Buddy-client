import Watchlist from '../../components/Watchlist/Watchlist';
import Portfolio from '../../components/Portfolio/Portfolio';
import StockChart from '../../components/StockChart/StockChart';
import NewsList from '../../components/NewsList/NewsList';
// import FilterBarFixed from '../../components/FilterBar/FilterBarFixed';
import FilterBarr from '../../components/FilterBar/FilterBarr';
import './Dashboard.scss';
function Dashboard(){
    const dashboardNewsList = 'dashboard/news';
    return(
        <>
            <div className='dashboard-overall'>
                <section className="dashboard-container">
                    <Watchlist/>
                    <Portfolio/>
                </section>
                <FilterBarr/>
                <div className='dashboard-chart-position'>
                    <StockChart/>
                </div>
            </div>
            <NewsList urlModifier={dashboardNewsList}/>
            {/* <FilterBarFixed/> */}

        </>
        
    )
}
export default Dashboard