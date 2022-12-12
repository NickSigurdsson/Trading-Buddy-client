import './NewsList.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from '../NewsItem/NewsItem';
function NewsList(){
    const [newsData, setNewsData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/')
        .then(response=>{
            setNewsData(response.data);
            console.log(response.data);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])

    if (!newsData){
        return(
            <h1>There is a problem fetching the latest news item</h1>
        )
    }
    return(
        <>
            <h2 className='news-header'>Recent News</h2>
            <section className='news__list'>
                {newsData.map((article)=>{
                    const {uuid,title,description, image_url:image,url} = article;
                    return(
                        <NewsItem
                        key={uuid}
                        title={title}
                        description={description}
                        image={image} 
                        url={url}                   
                        />
                    )
                })}
            </section>
        </>
        
    )
}
export default NewsList;