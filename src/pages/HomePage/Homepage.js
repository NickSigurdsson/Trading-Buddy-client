import HeroBanner from "../../components/HeroBanner/HeroBanner";
import NewsList from "../../components/NewsList/NewsList";
import './Homepage.scss';
function Homepage(){
    const homepageNewsList='';
    return(
        <>
            <HeroBanner/>
            <NewsList urlModifier={homepageNewsList}/>
        </>
        
    )
}
export default Homepage
