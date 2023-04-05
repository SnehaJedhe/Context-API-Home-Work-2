import React from "react";
import B from "./B";
import '../CSS_File/A.css';
import myContext from "../Context/Context";
import { useState } from "react";

function A(props) {
      const[state,setState]  = useState("")

  return (
    <div>
        <div id="A">
            <div className="">
      <h2>This IS A Component</h2>
      <p> Data from D Component: {state}</p>  
      </div> 
      </div>
      <myContext.Provider value={{setState}} >  
        <B />
      </myContext.Provider>

    </div>
  );
}

export default A;
