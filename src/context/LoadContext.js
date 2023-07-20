import { Spin } from 'antd';
import React from 'react';

const LoadContext = React.createContext({});

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <Spin />
      </div>
    </div>
  );
};
 function LoadProvider ({children}){
  return(
    <LoadContext.Provider value={{load:<Loading />}}>
      {children}
    </LoadContext.Provider>
  )
}
export {LoadContext, LoadProvider}