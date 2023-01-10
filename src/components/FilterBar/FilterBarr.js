import './FilterBarr.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
function FilterBarr({tickerUpdate}){
    // This will set the initial suggestion to have blank values
    const initList = [{"1. symbol":""}, {"1. symbol":""}];
    const [value,setValue] = useState('');
    const [list,setList] = useState([]);
    const updateValue = (event)=>{
        setValue(event.target.value);
        console.log(value);
    }
    useEffect(()=>{
        if (value === ''){
            setList(initList);
        }
        else{
            axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=3NSM9679F4Z9LTNT`)
            .then(response=>{
                const data = response.data["bestMatches"];
                setList(data);       
            })
            .catch(error=>{
                console.log(error);
            })   
        }
    },[value])

    return(
        <>
            <form className='search-bar-container'>
                <div>
                    <input className='search-bar-container__input' type="text" placeholder='Enter Ticker Here' value={value} onChange={updateValue} />
                    <div className='search-bar-suggestions'>
                        {list
                            .slice(0, 10)
                            .map((item)=> (
                                <div 
                                    className='search-bar-suggestions-item'
                                    onClick = {()=>{setValue(item["1. symbol"])}}
                                    key = {item["1. symbol"]}
                                >
                                    {item["1. symbol"]}    
                                </div>)
                            )
                        }
                    </div>
                </div>
                <button type='button' className='search-bar-container__button' onClick={()=> tickerUpdate(value)}>Search</button>
            </form>
            
        </>
    )
}
export default FilterBarr;