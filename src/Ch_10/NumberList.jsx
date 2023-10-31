import React from "react";

function NumberList(props){
  const nembers = [1,2,3,4,5]
const listItems = nembers.map((number)=>
<li key={number.toString()}>
  {number}
</li>
)

// const todos = [1,2,3,4,5];

// const todoItems = todos.map((todo, index)=>
// <li key ={index}>
//   {todo}
//   </li>
//   );


return(
  <ul>{listItems}</ul>
)
}
export default NumberList;