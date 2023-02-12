import React, { useEffect, useState } from 'react'
import '../components/temp.css'



const Temp = () => {

    let tempBackground = document.querySelector('.temp')

    let [temp,setTemp] = useState(0);

    useEffect(() => {

        if(temp >6) {
            tempBackground.classList.add('hot')
            tempBackground.classList.remove('cold')

        }
    
        if(temp > 20) {
            tempBackground.classList.add('veryHot')
            tempBackground.classList.remove('hot')
            tempBackground.classList.remove('cold')

        }
        if(temp < 0) {
            tempBackground.classList.add('cold')
            tempBackground.classList.remove('veryHot')
            tempBackground.classList.remove('hot')
        }
    },[temp])



   

    return ( 
        <div className='temp'>
            <h1>{temp} <span>&#176;</span>C</h1>
            <button onClick={() => setTemp(temp+1)}>+</button>
            <button onClick={() => setTemp(temp-1)}>-</button>
        </div>
     );
}
 
export default Temp;