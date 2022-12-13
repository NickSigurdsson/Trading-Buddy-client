import './NewsItem.scss';
function NewsItem({key,title,description,image,url}){
    return(
        <>
            <section>
                <div className='news-item'>
                    <img src={image} alt="headline graphics" className='news-item__image'/>
                    <div className='news-item__text'>
                        <h3 className='news-item__text-title'>{title}</h3>
                        <p className='news-item__text-paragraph'>{description}</p>
                        <button className='news-item__button' onClick={()=>window.open(url)}>Read More</button>
                    </div>
                </div>
            </section> 
        </>
    )
}
export default NewsItem;