import './HeroBanner.scss';
import BannerImage from '../../asset/images/banner.png'

function HeroBanner(){
    return(
        <div className='website-banner' >
            <img src={BannerImage} alt="website banner" className='website-banner__image' />
        </div>
    )
}
export default HeroBanner;