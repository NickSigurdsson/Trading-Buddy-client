import {useState, useEffect} from 'react';
import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
function CalendarPage(){ 
    //  new date = date object with the current date and time (makes sure that the state has the current date value)
    const [value, setValue] = useState(new Date());
    // console.log(value);
    const [dateInfo, setDateInfo] = useState([]);

    // this function will run when the calendar loads AND when the date selected is changed
    useEffect(() => {
        axios.get('http://localhost:8080/calendar')
        .then(response => {
            setDateInfo(response.data)
            console.log(dateInfo);
        })
        .catch(error => {
            console.log(error)
        })
    }, []);
    
    if (!dateInfo) {
        return (
            <h1>Currently fetching list of warehouses</h1>
        )
    }

    // function currentDateInfo(value){
    // // if value of the date is equal to the api's mapped value then display the type key value pair from the api
    //     dateInfo.map((dateData)=>{
    //         if (dateData.date === value){
    //             const importantDates = dateData.type;
    //             return importantDates;
    //         }
    //         const importantDates = 'No important events today';
    //         return importantDates;
    //     })
    // }
    return(
        <>
            <section>
                {/* the moment the value is changed, we will run the on change function (which in this case is the "set value of react" 
                and we will pass in the new input value into the value to change it accordingly*/}
                <CalendarComponent onChange={setValue} value={value}/>
            </section>
            <section className='current-date-info'>
                <h2>Important events</h2>
                <p>
                    {dateInfo.filter((dateData)=>{
                        if (dateData.date === value){
                            const importantDates = dateData.type;
                            return importantDates;
                        }
                        const importantDates = 'No important events today';
                        return importantDates;
                    })}
                </p>
            </section>
        </>
    );
}
export default CalendarPage;