import "./FilterBar.scss";
// import data from "../../data/dog-data.json";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import AlertsArticle from "../AlertsArticle/AlertsArticle";
import { useNavigate } from "react-router-dom";
function FilterBar() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const searchLogic = (event) => {
        setSearchValue(event.target.value);
    };
    const onSearch = (searchTerm) => setSearchValue(searchTerm);
    // use an axios call to grab data instead. maybe use a use effect to grab data from the api everytime the component is mounted. 
    const articleData = data
        .filter((item) => {
            const searchTerm = searchValue.toLowerCase();
            const title = item.Title.toLowerCase();
            return (
                searchTerm &&
                title.startsWith(searchTerm) &&
                title !== searchTerm
            );
        })
        .slice(0, 10);
    // searchTerm is whatever that search value is (that is being typed into the search box)
    const onSubmit = (event) => {
        event.preventDefault();
        const alertData = {
            id: uuidv4(),
            Name: searchValue,
            how_often: event.target.frequencydropdown.value,
            sources: event.target.sources.value,
            language: event.target.language.value,
            region: event.target.region.value,
            how_many: event.target.howmany.value,
            deliver_to: event.target.deliverto.value,
        };
        console.log(alertData);
        axios.post("http://localhost:8080/alerts", alertData).then(() => {
            navigate("/success");
        });
    };
    return (
        <form onSubmit={onSubmit} className="filter-item-overall-container">
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
            
            <button className="filter-item-button">Create an Alert</button>

            <div className="Alerts-Data">
                <h2 className="Alerts-Data__title">
                    Alerts Preview ({articleData.length})
                </h2>

                {articleData.map((data) => {
                    return <AlertsArticle data={data} />;
                })}
            </div>
        </form>
    );
}
export default FilterBar;
