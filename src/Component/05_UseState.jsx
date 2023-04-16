import React, { useState } from 'react';

function UseState(props) {

    const[data1,setData1]=useState(0);
    const[data2,setData2]=useState(0);

    function Btnclick(){
        setData1(10);
        setData2(20);
    }

    return (
        <div>
            <h4>This addition   {data1+data2}</h4>

            <button className='btn btn-primary' onClick={Btnclick}>Click me</button>
            <h1>This data1   {data1}</h1>
            <button className='btn btn-secondary'onClick={()=>{setData1(50)}}>Click me</button>


        </div>
    );
}

export default UseState;