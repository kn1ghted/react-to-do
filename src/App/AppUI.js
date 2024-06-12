import React from 'react';

// Import components
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDoLoading } from '../ToDoLoading';
import { ToDoError } from '../ToDoError';
import { EmptyToDo } from '../EmptyToDo';
import { ToDoForm } from '../ToDoForm';
import { Modal } from '../Modal';

// import global to do context
import { ToDoContext } from '../ToDoContext';

function AppUI(){

    const {
        loading,
        error,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(ToDoContext);

    // JSX elements keywords as className, tag names, and some inherited from HTML
    // React.Fragment allows to group elements without a wrapper nodes, requires React import
    // Options: write React.Fragment or leave empty tag <>
    return(
    <>
        <ToDoCounter/>

        <ToDoSearch/>

        <ToDoList>
        {loading ? 
        <>
            <ToDoLoading/>
            <ToDoLoading/>
            <ToDoLoading/>
            <ToDoLoading/>
        </> 
        : null}

        {error ? <ToDoError/> : null}
        {(!loading && searchedTodos.length === 0)? <EmptyToDo/> : null}
        {/* Render elements from an array, must key unique identifier */}
        {searchedTodos.map(todo => 
            <ToDoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            // Notice arrow function to pass parameters
            toggleComplete = {() => toggleCompleteTodo(todo.text)}
            // Notice arrow function to pass parameters
            onDelete = {() => deleteTodo(todo.text)}
            />
        )}
        </ToDoList>
        
        <CreateToDoButton
            setOpenModal = {setOpenModal}
        />

        {openModal ?
            <Modal>
                <ToDoForm/>
            </Modal>
            : null
        }

    </>
    );
}

export { AppUI };