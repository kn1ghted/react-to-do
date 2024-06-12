// Import component styles
import './CreateToDoButton.css';

// REACT component
function CreateToDoButton({ setOpenModal }){
    return (
      // Element encapsulated by component
    <button 
        className="createToDo"
        onClick={
            () => {
                console.log('Add ToDo button clicked!');
                setOpenModal(state => !state);
            }
        }>
        +
    </button>
    );
  }

  export { CreateToDoButton };