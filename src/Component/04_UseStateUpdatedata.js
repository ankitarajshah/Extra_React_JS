import React, { useState } from "react";
function StateUpdatedata() {
    // let data='Ankita';
    // function upadateData(){
    //    data= 'Nikita'
    //    alert(data)
    // }
    // return(
    //     <div>
    //         <h4>State in React</h4>
    //         <h6>{data}</h6>
    //         <button onClick={upadateData}>Update Data</button>
    //     </div>
    // )

// const[data, setData]= useState('Ankita')
// function updateData()
// {
//     setData('Nikita')
// }

const[data, setData]= useState(0)
function updateData()
{
    setData(data+1)
}

return(
    <div>
        <h4>{data}</h4>
        <button onClick={updateData}> Click me</button>
    </div>
)

}
export default StateUpdatedata;