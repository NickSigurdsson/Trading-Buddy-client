import './NewsList.scss';
import NewsItem from '../NewsItem/NewsItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
function NewsList(){
    useEffect(()=>{
        axios.get('http://localhost:8080/')
        .then(response=>{
            console.log(response.data);
        })
        .catch(error=>{
            console.log('something went wrong');
        })
        
    },[])
    return(
        <NewsItem/>
    )
}
export default NewsList;