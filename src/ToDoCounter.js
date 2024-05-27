// Stylesheet import
import './ToDoCounter.css';

// Styles JS object with JSX notation for CSS attributes
const styles = {
    backgroundColor: 'gray',
    color: 'white',
    margin: 0,
    padding: '48px',
    textAlign: 'center',

}

// Component recieving props parameters
// JSX elements with JSX inline styles 
function ToDoCounter({completed, total}){
  if (completed === total) {
    return(
      <h1 className="ToDoCounter" style={styles}>All tasks completed!</h1>
    ); 
  } else {
    return(
      <h1 className="ToDoCounter" style={styles}><span>{completed}</span> out of <span>{total}</span> to do tasks completed</h1>
    );
  }
    
}

// Named export requieres to be imported with exact name, avoiding type errors
export { ToDoCounter };