import React from 'react';

// Custom hook - must start with prefix USE
function useLocalStorage (itemName, initialValue) {

  // Internal states for local storage items
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // Effect to encapsulate loading of items
  // Set time out of 3 seconds to delay item loading
  React.useEffect(() => {
    setTimeout(() => {
      try {
        // local storage persistency
        // get item from local storage
        const localStorageItem = localStorage.getItem(itemName);
  
        // parsed to dos 
        let parsedItem;
  
        // if nothing found, then create empty array in local storage AND parsed array
        // if found, parse from local storage
        if (!localStorageItem) {
          localStorage.setItem('itemName', JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false)
      }
    }, 3000);
  },[]);
  
  // Arrow function to save to dos in local storage and 
  // APP state persistenly
  const saveItem = (newItem) => {
    localStorage.setItem('itemName', JSON.stringify(newItem));
    setItem(newItem);
  };
  
    // returns the item state and the function to save items to local storage and set item state
    // use object to return several states instead of array
    return {
      item, 
      saveItem,
      loading,
      error
    };
  }

  export { useLocalStorage };