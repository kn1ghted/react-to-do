import { CompleteIcon } from '../ToDoIcon/CompleteIcon';
import { DeleteIcon } from '../ToDoIcon/DeleteIcon';

// Import stylesheet
import './ToDoItem.css';

// REACT component
function ToDoItem(props){
    return(
      // Element encapsulated by component
      <li className="ToDoItem">
        <CompleteIcon
          completed = {props.completed}
          onToggle = {props.toggleComplete}
        />
        {/* <span onClick={props.toggleComplete}>V</span> */}
        <p className={`ToDoItem-description ${props.completed && "ToDoItem-description-completed"}`}>{props.text}</p>
        <DeleteIcon
          onDelete = {props.onDelete}
        />
        {/* <span onClick={props.onDelete}>x</span> */}
      </li>
    );
  }

  export { ToDoItem };