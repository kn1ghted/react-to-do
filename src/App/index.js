// Import default
import React from 'react';

// Import using named exports
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const defaultToDos = [
//   {text:'ToDo Task 1', completed: false},
//   {text:'ToDo Task 2', completed: false},
//   {text:'ToDo Task 3', completed: false},
//   {text:'ToDo Task 4', completed: false},
// ];
// localStorage.setItem('TODOS_V1', defaultToDos);
// localStorage.removeItem('TODOS_V1');

// This is a basic React component. Note uppercase function name
function App() {
  // React STATE for the given search value for child component
  // first element is the STATE, second element is the SET STATE
  // SET STATE re render the component with an updated state value
  // Argument on useState is the initial value for the state, in this case empty string
  const [searchValue, setSearchValue] = React.useState('');

  // STATE for todo tasks
  // use object to access several states, and renamed states for internal logic
  const {
    item : todos, 
    saveItem : saveToDos,
    loading,
    error
  } = useLocalStorage('TODOS_V1',[]);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // STATE for search todos
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );

  // Logic to toggle a To Do completed state
  const toggleCompleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    if (newTodos[todoIndex].completed === true) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true
    }
    saveToDos(newTodos);
  }

  // Logic to delete a To Do
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ); 
    newTodos.splice(todoIndex,1);
    saveToDos(newTodos);
  }

  // returns HTML-like block JSX
  return (
    < AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;