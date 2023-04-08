import React from "react";

const list =[
{id:1,title:'React',url:'https://react.js.org/',objectID:0,num_comments:3,points:4},
{id:2,title:'Rdux',url:'https://redux.js.org/',objectID:1,num_comments:4,points:5}
] 

function TodoList()
{ 
  const listItems = list.map((item) =>
  (
               
    <li key={item.id}>
        {item.title} |
        {item.objectID}|
     <a href={item.url}>| 
       {item.url}</a> | 
       {item.points}
    </li>));
  
    return (<div>
        <b> a todo list</b>
        <ul>
         {listItems}

        </ul>

      
          </div>
        )   //() multiline return stmt


}

export default TodoList;