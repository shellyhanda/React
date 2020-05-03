import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDostyle.css';


class TodoList extends React.Component{

    render(){

        return(
            <div className="todo-list">
               <ToDoItem />
               <ToDoItem />
               <ToDoItem />
            </div>
        );

    }
}

export default TodoList