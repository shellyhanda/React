import React from 'react';
import './ToDostyle.css'

class ToDoItem extends React.Component{

    render(){

        return(
           <div className="todo-item"> 
                <input type="checkbox" />
                <p>Choice-1</p>
           </div> 
        );
    }
}

export default ToDoItem