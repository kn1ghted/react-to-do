import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDoLoading } from '../ToDoLoading';
import { ToDoError } from '../ToDoError';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
}){

    // JSX elements keywords as className, tag names, and some inherited from HTML
    // React.Fragment allows to group elements without a wrapper nodes, requires React import
    // Options: write React.Fragment or leave empty tag <>
    return(
    <>
        
        <ToDoCounter
        completed={completedTodos}
        total={totalTodos}
        />
        {/* PROPS for the search component */}
        <ToDoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        />
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
        {(!loading && searchedTodos.lenght === 0)? <p>Create your first To Do!</p> : null}
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
        <CreateToDoButton/>
    </>
    );
}

export { AppUI };