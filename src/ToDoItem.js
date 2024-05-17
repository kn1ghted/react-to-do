// Import stylesheet
import './ToDoItem.css';

// REACT component
function ToDoItem(props){
    return(
      // Element encapsulated by component
      <li className="ToDoItem">
        <span className="icon icon-check">V</span>
        <p className="ToDoItem-description">{props.text}</p>
        <span className="icon icon-delete">x</span>
      </li>
    );
  }

  export { ToDoItem };