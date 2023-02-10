import React, { useState } from 'react'
import '../components/temp.css'



const Temp = () => {

    let tempBackground = document.querySelector('.temp')

    let [temp,setTemp] = useState(0);

    if(temp >10) {
        
        console.log(tempBackground)
        tempBackground.classList.add('hot')
    }

    if(temp > 20) {
        tempBackground.classList.add('veryHot')
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