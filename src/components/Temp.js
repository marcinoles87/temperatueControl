import React, { useState } from 'react'



const Temp = () => {

    const [temp,setTemp] = useState(0);

    return ( 
        <div>
            <h1>{temp} </h1>
            <button onClick={() => setTemp(temp+1)}>+</button>
            <button onClick={() => setTemp(temp-1)}>-</button>
        </div>
     );
}
 
export default Temp;