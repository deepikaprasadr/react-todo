import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
// function getTitle(title){  return title;}

const title = 'React';
const list=[
  {id:1,title:'React',url:'https://react.js.org/',objectID:0,num_comments:3,points:4},
  {id:2,title:'Rdux',url:'https://redux.js.org/',objectID:1,num_comments:4,points:5}
];
 


function listItem(item)
{return  
 <li>{item.objectID} {item.title}  <a href={item.url}>{item.url}</a> {item.points}</li>  
}

function App() {
  return (
    <div  >
   <TodoList/>

   <hr/>
   <AddTodoForm/>
    </div>
  );
}

export default App;

