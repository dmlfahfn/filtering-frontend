import React, {useState} from "react";

const Filter = (props) => {

    const [isSubscribed, setIsSubscribed] = useState(false);

    const uniqueProducts = [...new Set(props.videos.map(item => item.product))];
    const uniqueVersions = [...new Set(props.videos.map(item => item.version))];

    const handleOnChange = (e) => {
    
        let arr =[...props.filteredArray]
        if (e.target.checked ) {
                props.videos.filter(product => {
                    if(e.target.name === product.product || e.target.name === product.version){
                        arr.push(product)
                        props.setFilteredArray(arr);
                        console.log("1",props.filteredArray);
                        return props.filteredArray
                    } 
                })  
            }
               else {
                    if(e.target.checked === false){
                        let temp = [...props.filteredArray]
                        temp.splice(props.filteredArray.indexOf(e.target.name), 1)
                        props.setFilteredArray(temp)
                        console.log("2",props.filteredArray);

                        return props.filteredArray
                    }
               }                        
              setIsSubscribed(current => !current);


    }
  
    return (
        <div className="filter-container">
            <h4>Products</h4>
            {uniqueProducts.map(filter => (
                <div key={filter}>
                    <input type="checkbox" name={filter} value={isSubscribed} onChange={handleOnChange}/> {filter}
                </div>
            ))}
            <h4>Version</h4>
            {uniqueVersions.map(filter => (
                <div key={filter}>
                    <input type="checkbox" name={filter} value={isSubscribed} onChange={handleOnChange} /> {filter}
                </div>
            ))}
        </div>
    )
}

export default Filter;