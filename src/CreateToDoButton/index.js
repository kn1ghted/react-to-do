// Import component styles
import './CreateToDoButton.css';

// REACT component
function CreateToDoButton(){
    return (
      // Element encapsulated by component
    <button 
        className="createToDo"
        onClick={
            (event) => {
                console.log('Add ToDo button clicked!');
                console.log(event.target);
            }
        }>
        +
    </button>
    );
  }

  export { CreateToDoButton };