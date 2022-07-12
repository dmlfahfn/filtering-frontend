import React from "react";

const Filter = (props) => {

    let uniqueProducts = [...new Map(props.videos.map((item) => [item["product"], item])).values()];
    let uniqueVersions = [...new Map(props.videos.map((item) => [item["version"], item])).values()];

    const handleOnChange = (e) => {
        
        let arr =[...props.filteredArray]
        props.videos.filter(product => {
        if (e.target.checked ) {  
                if(e.target.name === product.product || e.target.name === product.version){
                    product.checked = true
                    arr.push(product);
                    props.setFilteredArray(arr)
                    return props.filteredArray
                }
        } else if(e.target.name === product.product || e.target.name === product.version) {
            product.checked = false
            if(product.checked === false){
                let some = arr.filter(arrFilter => {
                    return arrFilter.product != product.product
                })
                props.setFilteredArray(some)       
                return props.filteredArray                     
            }
        }
    })

    }
  
    return (
        <div className="filter-container">
            <h4>Products</h4>
            {uniqueProducts.map(filter => (
                <div key={filter.id}>
                    <input type="checkbox" name={filter.product} value={filter} onChange={handleOnChange}/> {filter.product}
                </div>
            ))}
            <h4>Version</h4>
            {uniqueVersions.map(filter => (
                <div key={filter.id}>
                    <input type="checkbox" name={filter.version} value={filter} onChange={handleOnChange} /> {filter.version}
                </div>
            ))}
        </div>
    )
}

export default Filter;