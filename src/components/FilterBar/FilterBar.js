import "./FilterBar.scss";
// import data from "../../data/dog-data.json";
import { useState, useEffect } from "react";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import AlertsArticle from "../AlertsArticle/AlertsArticle";
import { useNavigate } from "react-router-dom";
function FilterBar() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    // this state contains the data we take in from the API
    const [searchData, setSearchData] = useState([]);
    
    // this use effect will be triggered everytime searchvalue (what is entered in the input box is changed)
    useEffect(() => {
        axios.get('http://localhost:8080/dashboard/search')
        .then(response => {
            setSearchData(response)
        })
        .catch(error => {
          console.log(error)
        })
      }, [searchValue])

    const searchLogic = (event) => {
        setSearchValue(event.target.value);
    };
    const onSearch = (searchTerm) => setSearchValue(searchTerm);
    const articleData = searchData
        .filter((item) => {
            const searchTerm = searchValue.toUpperCase();
            const item = ticker["1. symbol"];
            return (
                searchTerm &&
                item.startsWith(searchTerm) &&
                item !== searchTerm
            );
        })
        .slice(0, 10);
    
    return (
        <form className="filter-item-overall-container">
            <div className="search-bar">
                <h2>Monitor keywords and specific terms you set</h2>
                <div className="search-bar-overall-container">
                    <div className="search-bar-container">
                        <input
                            className="search-bar-container-input"
                            placeholder="Search keywords"
                            type="text"
                            value={searchValue}
                            onChange={searchLogic}
                        />
                    </div>
                    <div className="search-bar-autofill">
                        {data
                            .filter((item) => {
                                const searchTerm = searchValue.toLowerCase();
                                const title = item.Title.toLowerCase();
                                return (
                                    searchTerm &&
                                    title.startsWith(searchTerm) &&
                                    title !== searchTerm
                                );
                            })
                            .slice(0, 10)
                            .map((item) => (
                                <div
                                    onClick={() => onSearch(item.Title)}
                                    key={item.Title}
                                >
                                    {item.Title}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </form>
    );
}
export default FilterBar;
