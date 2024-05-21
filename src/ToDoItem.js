// Import stylesheet
import './ToDoItem.css';

// REACT component
function ToDoItem(props){
    return(
      // Element encapsulated by component
      <li className="ToDoItem">
        <span className={`icon icon-check ${props.completed && "icon-check-active"}`}>V</span>
        <p className={`ToDoItem-description ${props.completed && "ToDoItem-description-completed"}`}>{props.text}</p>
        <span className="icon icon-delete">x</span>
      </li>
    );
  }

  export { ToDoItem };