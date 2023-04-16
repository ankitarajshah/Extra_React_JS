// We embed the use of any JavaScript expression in JSX by wrapping them in curly braces except if-else 
// statements. But we can use conditional statements instead of if-else statements in JSX. Below is the 
// example where conditional expressing is embedded in JSX: 



import React from "react";
import { ReactDOM } from "react";

let i=1;
const element =<h1>{(i==1)?'Hello World':'False!'}</h1>;

ReactDOM.render(
    element,document.getElementById('root')
);