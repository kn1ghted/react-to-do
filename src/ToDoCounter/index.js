// Stylesheet import
import './ToDoCounter.css';
// Additional imports
import { ToDoContext } from '../ToDoContext';
import React from 'react';


// Styles JS object with JSX notation for CSS attributes
const styles = {
    backgroundColor: 'gray',
    color: 'white',
    margin: 0,
    padding: '48px',
    textAlign: 'center',
}

// Component recieving props parameters
// JSX elements with JSX inline styles 
function ToDoCounter(){

  // Use right context to access shared props
  const {completedTodos, totalTodos} = React.useContext(ToDoContext);

  if (completedTodos === totalTodos) {
    return(
      <h1 className="ToDoCounter" style={styles}>All tasks completed!</h1>
    ); 
  } else {
    return(
      <h1 className="ToDoCounter" style={styles}><span>{completedTodos}</span> out of <span>{totalTodos}</span> to do tasks completed</h1>
    );
  }
    
}

// Named export requieres to be imported with exact name, avoiding type errors
export { ToDoCounter };