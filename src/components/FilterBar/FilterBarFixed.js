import { useState, useEffect } from "react";
import axios from 'axios';
// import "./styles.css";

function FilterBarFixed() {
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  useEffect(() => {
    axios.get('http://localhost:8080/dashboard/search')
    .then(response => {
        setSearchData(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <h1>Search</h1>
      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {searchData
            .filter((item) => {
              const searchTerm = value;
              const symbol = item["1. symbol"];

              return (
                searchTerm &&
                symbol.startsWith(searchTerm) &&
                symbol !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item["1. symbol"])}
                className="dropdown-row"
                key={item["1. symbol"]}
              >
                {item["1. symbol"]}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default FilterBarFixed;
