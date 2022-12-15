import React from 'react';
import {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';
import './StockChart.scss';
// basically stock charts is a type of react component (making it a part of)
function StockChart() {
  const [xValue, setXValue] = useState([]);
  const [yValue, setYValue] = useState([]);

  const API_KEY='3NSM9679F4Z9LTNT';
  const TICKER='TSLA';

  useEffect(()=>{
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${TICKER}&outputsize=compact&apikey=${API_KEY}`)
    .then(response => {
        // do some sort of data storing for both the x and y value using the states you've declared above.
        const data = response.data;
        const XValueArray = [];
        const YValueArray = [];

        // filtering for x values
        for (var key in data['Time Series (Daily)']) {
            XValueArray.push(key);
            YValueArray.push(data['Time Series (Daily)'][key]['4. close']);
        }
        setXValue(XValueArray);
        setYValue(YValueArray);
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
    },[])

    return (
      <div className='chart-container'>
        <Plot
          data={[
            {
              x: xValue,
              y: yValue,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: '7FC37E'},
            }
          ]}
          layout={{width: 720, height: 440, title: TICKER}}
          config = {{responsive:true}}
        />
      </div>
    )
};
export default StockChart;
