import React from "react";

const Filter = ({videos}) => {

    
    return (
        <div className="filter-container">
            <h4>Products</h4>
            {videos.map(filter => (
                <div key={filter.id}>
                    <input type="checkbox" name={filter.product} />
                    <label htmlFor={filter.product}>{filter.product}</label>
                </div>
            ))}
            <h4>Version</h4>
            {videos.map(filter => (
                <div key={filter.id}>
                    <input type="checkbox" name={filter.version} />
                    <label htmlFor={filter.version}>{filter.version}</label>
                </div>
            ))}
        </div>
    )
}

export default Filter;