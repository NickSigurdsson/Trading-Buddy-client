import BannerImage from '../../asset/images/'
function HeroBanner(){
    return(
        <div >
            <div className=''>
                <img src={BannerImage} alt="banner image" />
            </div>
        </div>
    )
}
export default HeroBanner;