import React from "react";
import "./ToDoForm.css";
import { ToDoContext } from "../ToDoContext";

function ToDoForm(){
    // Use global context to change the setOpenModal state
    const {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext);
    // Local state to add a new to do using the textarea
    const [newToDoValue, setNewToDoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    }


    return (
        <form onSubmit={onSubmit}>
            <label>Add a new to do to your list:</label>
            <textarea 
                placeholder="To Do description"
                value={newToDoValue}
                onChange={onChange}
            />
            <div className="todoform-buttons-container">
                <button
                    type="button"
                    className="todoform-button cancel"
                    onClick={onCancel}
                >Cancel</button>
                <button
                    type="submit"
                    className="todoform-button add"
                >Add</button>
            </div>
            
        </form>
    );
}

export { ToDoForm };