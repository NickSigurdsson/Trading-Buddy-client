import './FilterBarr.scss';
import { useState } from 'react';
function FilterBarr(){
    // Sets up initial 
    const [value,setValue] = useState('')
    // This line constantly updates the value of "value" and we can set it so that with EVERY change we will do an http request (axios call) --> do in front end then transfer to the backend
    const updateValue = (event)=>{
        setValue(event.target.value);
    }
    return(
        <>
            <h2 className='search-bar-container__heading'>Enter  </h2>
            <form className='search-bar-container' action="">
                <input className='search-bar-container__input' type="text" placeholder='Enter Ticker Here' value={value} onChange={updateValue} />
            </form>
        </>
    )
}
export default FilterBarr;