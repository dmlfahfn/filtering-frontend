import React, {useState} from "react";

const Filter = (props) => {

    const [isSubscribed, setIsSubscribed] = useState(false);

    const uniqueProducts = [...new Set(props.videos.map(item => item.product))];
    const uniqueVersions = [...new Set(props.videos.map(item => item.version))];

    const handleOnChange = (e) => {

            if (e.target.checked ) {
                console.log('✅ Checkbox is checked');

                props.videos.map(product => {
                    if(e.target.name === product.product || e.target.name === product.version){
                        props.setFilteredArray([...props.filteredArray, product]);
                        return props.filteredArray
                    } 
                })
            }
               else {
                console.log('⛔️ Checkbox is NOT checked');

                props.videos.map(product => {
                    if(e.target.checked === false){
                        const temp = [...props.filteredArray]
                        temp.pop(product)
                        props.setFilteredArray(temp)
                        return props.filteredArray
                    }
                })
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