import Watchlist from '../../components/Watchlist/Watchlist';
import Portfolio from '../../components/Portfolio/Portfolio';
import StockChart from '../../components/StockChart/StockChart';
import './Dashboard.scss';
function Dashboard(){
    return(
        <div className='dashboard-overall'>
            <section className="dashboard-container">
                <Watchlist/>
                <Portfolio/>
            </section>
            <StockChart/>
        </div>
    )
}
export default Dashboard