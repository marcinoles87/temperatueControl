import React, { useState } from 'react'
import '../components/temp.css'



const Temp = () => {

    let tempBackground = document.querySelector('.temp')

    let [temp,setTemp] = useState(0);


    if(temp >10) {
        
        tempBackground.classList.remove('cold')
        tempBackground.classList.add('hot')

    }

    if(temp > 20) {
        tempBackground.classList.add('veryHot')
        tempBackground.classList.remove('hot')
    }

    if(temp < 5) {
        // tempBackground.classList.remove('hot')
        // tempBackground.classList.remove('veryHot')
        // tempBackground.classList.add('cold')
    }



   

    return ( 
        <div className='temp'>
            <h1>{temp} <span>&#176;</span>C</h1>
            <button onClick={() => setTemp(temp+1)}>+</button>
            <button onClick={() => setTemp(temp-1)}>-</button>
        </div>
     );
}
 
export default Temp;