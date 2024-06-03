import React from 'react';

// Custom hook - must start with prefix USE
function useLocalStorage (itemName, initialValue) {

    // local storage persistency
    // get item from local storage
    const localStorageItem = localStorage.getItem(itemName);
    // parsed to dos 
    let parsedItem;
    // if nothing found, then create empty array in local storage AND parsed array
    if (!localStorageItem) {
        localStorage.setItem('itemName', JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        // if found, parse from local storage
        parsedItem = JSON.parse(localStorageItem);
    }
  
    // Internal state for local storage items
    const [item, setItem] = React.useState(parsedItem);
  
    // Arrow function to save to dos in local storage and 
    // APP state persistenly
    const saveItem = (newItem) => {
      localStorage.setItem('itemName', JSON.stringify(newItem));
      setItem(newItem);
    };
  
    // returns the item state and the function to save items to local storage and set item state
    return [item, saveItem];
  }

  export { useLocalStorage };