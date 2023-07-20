import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './screens/HomeScreens';
import LoginScreens from './screens/LoginScreens';
import LoginSuccess from './screens/LoginSuccess';
import ForgotPassword from './screens/ForgotPassword';
import RegisterScreen from './screens/RegisterScreen';
import DataProvider from './data/DataProvider';

const App = () => {


  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginScreens />} />
          <Route path="/loginsuccess" element={<LoginSuccess />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
          <Route path="/register" element={<RegisterScreen />} />

        </Routes>
      </BrowserRouter>
    </DataProvider>
   
  );
};

export default App;
