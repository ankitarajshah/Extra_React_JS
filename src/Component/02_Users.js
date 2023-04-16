//Code with JSX

function Users()
{
    function handleClick()
    {
        alert("function called on button click!")
    }
    return(
        <>
        <div>Hello User </div>
        <div>{10+10} </div>

        <button
            className="button"
            // onClick={handleClick()}> this gives alert before click
            // onClick={handleClick}>
            // onClick={()=>handleClick()}>
            onClick={()=>alert('Hello')}>
            Click Me 
        </button>
        </>
    )
}
export default Users;

// Code without JSX
// import React from "react";

// function Users()
// {
//     return React.createElement('h1',null,'Hello Users')
// }

// export default Users;