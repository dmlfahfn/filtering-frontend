import React, {useState} from "react";

const Search = (props) => {

    const [searchInput, setSearchInput] = useState('');

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
        const filteredData = props.videos.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        props.setFilteredResults(filteredData)
    }
    else{
        props.setFilteredResults(props.videos)
    }
    }

    return (
        <div className="search-container">
            <input type="text" placeholder= "Search" onChange={(e) => searchItems(e.target.value)}/>
            <button>Filters</button>
        </div>
    )
}

export default Search;