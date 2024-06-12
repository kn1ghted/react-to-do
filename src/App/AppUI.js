import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDoLoading } from '../ToDoLoading';
import { ToDoError } from '../ToDoError';
import { EmptyToDo } from '../EmptyToDo';

// import global to do context
import { ToDoContext } from '../ToDoContext';

function AppUI(){

    // JSX elements keywords as className, tag names, and some inherited from HTML
    // React.Fragment allows to group elements without a wrapper nodes, requires React import
    // Options: write React.Fragment or leave empty tag <>
    return(
    <>
        <ToDoCounter/>
        <ToDoSearch/>

        {/* Context consumer uses arrow function as render function */}
        <ToDoContext.Consumer>
            {({
                loading,
                error,
                searchedTodos,
                toggleCompleteTodo,
                deleteTodo,
            }) => (
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
                {(!loading && searchedTodos.lenght === 0)? <EmptyToDo/> : null}
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
            )
            }
        </ToDoContext.Consumer>
        
        <CreateToDoButton/>
    </>
    );
}

export { AppUI };