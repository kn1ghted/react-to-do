import React from "react";
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();

// To do provider with children components
function ToDoProvider({children}){
    // React STATE for the given search value for child component
    // first element is the STATE, second element is the SET STATE
    // SET STATE re render the component with an updated state value
    // Argument on useState is the initial value for the state, in this case empty string
    const [searchValue, setSearchValue] = React.useState('');

    // STATES for todo tasks
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

    // STATE for modal window
    const [openModal, setOpenModal] = React.useState(false);

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

    // Logic to add a To Do
    const addToDo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveToDos(newTodos);
    }

    return (
        // VALUE contains all states that needs to be exposed to the context
        <ToDoContext.Provider value = {{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            addToDo,
            deleteTodo,
            openModal, 
            setOpenModal
        }}>
            {children}
        </ToDoContext.Provider>
    );
}

export { ToDoContext, ToDoProvider };