import React, { useState } from "react";

const Filter = ({videos}) => {

    const [isChecked, setIsChecked] = useState(false)

    let filteredProducts = [];

    const uniqueProducts = [...new Set(videos.map(item => item.product))];
    const uniqueVersions = [...new Set(videos.map(item => item.version))];

    const handleOnChange = (e) => {
        setIsChecked(!isChecked)
        videos.filter(product => {
            if(e.target.name === product.product){
                filteredProducts.push(product)
            }
            return filteredProducts
        })

        console.log(filteredProducts);

    }
    
    return (
        <div className="filter-container">
            <h4>Products</h4>
            {uniqueProducts.map(filter => (
                <div key={filter}>
                    <input type="checkbox" name={filter} checked={isChecked} onChange={handleOnChange}/> {filter}
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