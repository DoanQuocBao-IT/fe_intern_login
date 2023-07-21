import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomeScreens from './screens/HomeScreens';
import LoginScreens from './screens/LoginScreens';
import LoginSuccess from './screens/LoginSuccess';
import ForgotPassword from './screens/ForgotPassword';
import RegisterScreen from './screens/RegisterScreen';
import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
 const isLogin = useSelector((state) => state.refreshToken.isLogin)
 console.log("Ílogin:"+isLogin)
  return (
    <BrowserRouter>
      <Routes>
        { isLogin && 
        <React.Fragment>
          <Route path="/" element={<HomeScreens />} />
          <Route path="/login" element={<LoginScreens />} />
           <Route path="/*" element={<Navigate to="/login" replace={true}/>} />
        </React.Fragment>
        }
        
        { !isLogin && 
        <React.Fragment> 
          <Route path="/loginsuccess" element={<LoginSuccess />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/*" element={<Navigate to="/loginsuccess" replace={true}/>} />
        </React.Fragment>
         } 

      </Routes>
    </BrowserRouter>
  );
};

export default App;
