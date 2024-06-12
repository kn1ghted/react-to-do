// Import default
import React from 'react';
// Import using named exports
import { AppUI } from './AppUI';
import { ToDoProvider } from '../ToDoContext';

// This is a basic React component. Note uppercase function name
function App() {

  // returns HTML-like block JSX
  return (
    // Encapsulate the UI as part of the global context
    <ToDoProvider>
       < AppUI/>
    </ToDoProvider>
  );
}

export default App;