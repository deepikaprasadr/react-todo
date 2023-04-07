import logo from './logo.svg';
import './App.css';

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
    {/* <h1>Hello {title}</h1> */}
    {/* <h1>Hello {getTitle('World')}</h1>  */}

    <h1></h1>

    <label htmlFor="search">Search: </label>
    <input id="search" type="text"/>
{/* render the list */}
<hr/>
<ul>
{list.map( 
  function(item){return <li>{item.id} | {item.title} | {item.objectID} <a href={item.url}>| {item.url}</a> | {
    item.points}</li> }
  
)}
</ul>
    </div>
  );
}

export default App;

