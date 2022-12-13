import Watchlist from '../../components/Watchlist/Watchlist';
import Portfolio from '../../components/Portfolio/Portfolio';
import './Dashboard.scss';
function Dashboard(){
    return(
        <>
            <section className="dashboard-lists">
                <Watchlist/>
                <Portfolio/>
            </section>
        </>
    )
}
export default Dashboard