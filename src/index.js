import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import'./index.css';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import {LoadProvider} from './context/LoadContext'
import  {NotifyProvider}  from './context/NotifyContext';
import store, { persistor } from './store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider theme={{ token: { colorPrimary: '#FF0000' } }}>
    <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <NotifyProvider>
          <LoadProvider>
              <App />
          </LoadProvider>
        </NotifyProvider>
      {/* </PersistGate> */}
    </Provider>
    </React.StrictMode>
  </ConfigProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
