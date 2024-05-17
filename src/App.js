// Import default
// import React from 'react';

// Import using named exports
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

const defaultToDos = [
  {text:'ToDo Task 1', completed: true},
  {text:'ToDo Task 2', completed: false},
  {text:'Learn REACT.JS', completed: false},
  {text:'Bank errands', completed: false},
];

// This is a basic React component. Note uppercase function name
function App() {
  // returns HTML-like block JSX
  return (
    // JSX elements keywords as className, tag names, and some inherited from HTML
    // React.Fragment allows to group elements without a wrapper nodes, requires React import
    // Options: write React.Fragment or leave empty tag <>
    <>
      
      <ToDoCounter
        completed={5}
        total={20}
      />
      <ToDoSearch/>
      <ToDoList>
        {/* Render elements from an array, must key unique identifier */}
        {defaultToDos.map(todo => 
          <ToDoItem key={todo.text} text={todo.text}/>
        )}
      </ToDoList>
      <CreateToDoButton/>
    </>
  );
}

export default App;