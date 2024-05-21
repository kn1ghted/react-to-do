// REACT import
import React from 'react';
// Stylesheet import
import './ToDoSearch.css'

// Get props of parent component as arguments
function ToDoSearch({searchValue, setSearchValue}) {

    return(
      <input 
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