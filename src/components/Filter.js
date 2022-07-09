import React, {useState} from "react";

const Filter = (props) => {

    const [isSubscribed, setIsSubscribed] = useState(false);

    const uniqueProducts = [...new Set(props.videos.map(item => item.product))];
    const uniqueVersions = [...new Set(props.videos.map(item => item.version))];

    const handleOnChange = (e) => {
        // props.videos.filter(product => {
        //     if(e.target.name === product.product){
        //         product.isChecked = true;  
        //         if(!props.filteredArray.includes(product)){
        //             console.log(props.filteredArray.hasOwnProperty(product));
        //             props.setFilteredArray(current =>[...current, product])
        //             console.log(props.filteredArray)
        //         }
        //     }
        //     return props.filteredArray
        // })


            if (e.target.checked ) {
                console.log('✅ Checkbox is checked');

                props.videos.map(product => {
                    product.isChecked = true
                    if(e.target.name === product.product && product.isChecked === true && !props.filteredArray.includes(product)){
                        console.log("product",product);
                        props.setFilteredArray([...props.filteredArray, product]);
                        return props.filteredArray
                    } 
                })
                }
               else {
                console.log('⛔️ Checkbox is NOT checked');
                props.videos.map(product => {
                    product.isChecked = false
                    if(props.filteredArray.includes(product) && product.isChecked === false){
                        props.setFilteredArray([])
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
                    <input type="checkbox" name={filter} /> {filter}
                </div>
            ))}
        </div>
    )
}

export default Filter;