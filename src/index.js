import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider, Spin, notification } from 'antd';

export const AppContext = React.createContext({});

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <Spin />
      </div>
    </div>
  );
};

const handleNotification = (message) => {
  notification.open({
    message: 'Thông báo',
    description: message,
    placement: 'topRight',
  });
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider theme={{ token: { colorPrimary: '#FF0000' } }}>
    <React.StrictMode>
      <AppContext.Provider 
        value={{load :<Loading />, 
                notify:handleNotification}}
        >
        <App />
      </AppContext.Provider>
    </React.StrictMode>
  </ConfigProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
