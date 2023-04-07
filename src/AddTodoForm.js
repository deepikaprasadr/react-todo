import React  from 'react';


function AddTodoForm()
{
    return  (<div><h1>Hello React</h1>
    
    <form>
                    <label name="Title" value="Title">Title:</label>
                    <label htmlFor="todoTitle"></label>
                    <input type="text" id="todoTitle"></input>
                    <button type="submit" text="Add"></button>
     </form>
    </div>);
           
}

export default AddTodoForm;
