import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import MyComponent from './components/MyComponent'
import MyInfo from './components/MyInfo'
import TodoList from './ToDoComponents/TodoList'

//ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<div><h1>Hello Shelly!!</h1><p>meme</p></div>,document.getElementById("root"));

//ReactDOM.render(<MyComponent/>,document.getElementById("root"));

//ReactDOM.render(<MyInfo />, document.getElementById('root'))

ReactDOM.render(<TodoList />, document.getElementById('root'))
