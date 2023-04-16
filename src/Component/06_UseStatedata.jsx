import React, { useState } from 'react'
//Example: Program to demonstrate the use of useState() hook.
export default function UseStatedata() {

    const[change, setChange]= useState(0);
    
  return (
    <div>
        <button onClick={()=> setChange(!change)}>Click here</button>

        {change? <h1>Welcome</h1>:
                <h1>React JS</h1>}

    </div>
  )
}
