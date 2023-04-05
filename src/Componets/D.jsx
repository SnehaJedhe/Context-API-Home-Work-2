import React from 'react';
import { useContext } from 'react';
import myContext from '../Context/Context';
import { useState } from 'react';
import '../CSS_File/A.css';

function D() {

      const {setState} = useContext(myContext)
      const [data , setData] = useState("")

    return (
        <>
        <div id="A">
            <h2>This Is D Component</h2>
            <div className='data'>
            <input type='text' onChange={(e)=>{setData(e.target.value)}} />
            <button onClick={()=>{setState(data)}}>Send Here</button>
            </div>
        </div>
        </>
    );
}

export default D;
