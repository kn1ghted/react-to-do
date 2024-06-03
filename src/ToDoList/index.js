function ToDoList({children}){
    return(
      <ul>
        {children}
      </ul>
    );
}

// Named export requieres to be imported with exact name, avoiding type errors
export { ToDoList };