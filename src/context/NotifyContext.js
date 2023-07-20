import React from 'react';
import {  notification } from 'antd'; 

const NotifyContext = React.createContext({});

function NotifyProvider ({children}){
    return (       
            <NotifyContext.Provider value={handleNotification}>
                {children}
            </NotifyContext.Provider>       
    )
}

const handleNotification = (message, type) => {
    notification.open({
      message: 'Thông báo',
      description: message,
      placement: 'topRight',
      type:type,
    });
  };
export {NotifyContext, NotifyProvider};