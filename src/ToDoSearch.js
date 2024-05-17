// Styles import
import './ToDoSearch.css'

function ToDoSearch(){
    return(
      <input placeholder="Search task"></input>
    );
}

// Named export requieres to be imported with exact name, avoiding type errors
export { ToDoSearch };