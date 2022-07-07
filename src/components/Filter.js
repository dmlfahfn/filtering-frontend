import React,  {useState} from "react";

const Filter = ({videos}) => {


    const uniqueProducts = [...new Set(videos.map(item => item.product))];

    const uniqueVersions = [...new Set(videos.map(item => item.version))];


    // const [checked, setChecked] = useState(false)
    
    return (
        <div className="filter-container">
            <h4>Products</h4>
            {uniqueProducts.map(filter => (
                <div key={filter}>
                    <input type="checkbox" name={filter} /> {filter}
                </div>
            ))}
            <h4>Version</h4>
            {uniqueVersions.map(filter => (
                <div key={filter}>
                    <input type="checkbox" name={filter} /> {filter}
                </div>
            ))}
        </div>
    )
}

export default Filter;