import './NewsItem.scss';
import { Link } from "react-router-dom";
function NewsItem(){
    return(
        <section>
            <h2 className='news-header'>Recent News</h2>
            <div className='news-item'>
                <img src='https://bl-i.thgim.com/public/incoming/km0ppu/article66113951.ece/alternates/LANDSCAPE_1200/Twitter.JPG' alt="headline image" className='news-item__image'/>
                <div className='news-item__text'>
                    <h3 className='news-item__text-title'>Twitter to introduce new controls for ad placements</h3>
                    <p className='news-item__text-paragraph'>The new controls are part of Twitter's effort to reassure and lure back advertisers that have pulled ads off the platform</p>
                    <button className='news-item__button' onClick={window.open('https://www.thehindubusinessline.com/info-tech/social-media/twitter-to-introduce-new-controls-for-ad-placements/article66241781.ece')}>Read More</button>
                </div>
            </div>
        </section>
        
    )
}
export default NewsItem;