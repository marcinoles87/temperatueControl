import React, { useState } from 'react'
import '../components/temp.css'



const Temp = () => {

    const [temp,setTemp] = useState(0);

    if(temp >10) {
        const tempBackground = document.getElementsByClassName('temp')
        console.log(tempBackground)

    }

    return ( 
        <div className='temp'>
            <h1>{temp} C</h1>
            <button onClick={() => setTemp(temp+1)}>+</button>
            <button onClick={() => setTemp(temp-1)}>-</button>
        </div>
     );
}
 
export default Temp;