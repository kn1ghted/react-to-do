// REACT import
import React from 'react';
// Stylesheet import
import './ToDoSearch.css'
import { ToDoContext } from '../ToDoContext';

// Use context to get shared props
function ToDoSearch() {
    const {searchValue, setSearchValue,} = React.useContext(ToDoContext);

    return(
      <input id="search"
      className="ToDoSearch" 
      placeholder="Search task"
      value = {searchValue}
      onChange={
        (event) => {
            setSearchValue(event.target.value)
        }
      }>
      </input>
    );
}

// Named export requieres to be imported with exact name, avoiding type errors
export { ToDoSearch };