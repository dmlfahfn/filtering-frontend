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


            if (e.target.checked) {
                console.log('✅ Checkbox is checked');
                props.videos.filter(product => {
                if(e.target.name === product.product){
                    if(props.filteredArray.hasOwnProperty(product)){
                        props.setFilteredArray(current =>[...current, product])
                    }
                }
               else {
                console.log('⛔️ Checkbox is NOT checked');}
            })
              }
              setIsSubscribed(current => !current);
              return props.filteredArray
        
        

        
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