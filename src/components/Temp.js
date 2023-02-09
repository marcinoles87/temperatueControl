import React, { useState } from 'react'
import '../components/temp.css'



const Temp = () => {

    const [temp,setTemp] = useState(0);

    return ( 
        <div className='temp'>
            <h1>{temp} </h1>
            <button onClick={() => setTemp(temp+1)}>+</button>
            <button onClick={() => setTemp(temp-1)}>-</button>
        </div>
     );
}
 
export default Temp;