import React from 'react';
import Store from '../Stores/Store';

export const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  const store = Store();

  return (
    <DataContext.Provider value={{ store }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;