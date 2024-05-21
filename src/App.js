// Import default
import React from 'react';

// Import using named exports
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

const defaultToDos = [
  {text:'ToDo Task 1', completed: true},
  {text:'ToDo Task 2', completed: false},
  {text:'Learn REACT.JS', completed: true},
  {text:'Bank errands', completed: false},
  {text:'Change car batery', completed: false}
];

// This is a basic React component. Note uppercase function name
function App() {

  // React STATE for the given search value for child component
  // first element is the STATE, second element is the SET STATE
  // SET STATE re render the component with an updated state value
  // Argument on useState is the initial value for the state, in this case empty string
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  // STATE for todo tasks
  const [todos, setTodos] = React.useState(defaultToDos);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // returns HTML-like block JSX
  return (
    // JSX elements keywords as className, tag names, and some inherited from HTML
    // React.Fragment allows to group elements without a wrapper nodes, requires React import
    // Options: write React.Fragment or leave empty tag <>
    <>
      
      <ToDoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      {/* PROPS for the search component */}
      <ToDoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <ToDoList>
        {/* Render elements from an array, must key unique identifier */}
        {defaultToDos.map(todo => 
          <ToDoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        )}
      </ToDoList>
      <CreateToDoButton/>
    </>
  );
}

export default App;