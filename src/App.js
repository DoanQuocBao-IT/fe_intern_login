import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreens from './screens/HomeScreens';
import LoginScreens from './screens/LoginScreens';
import LoginSuccess from './screens/LoginSuccess';
import RegisterScreen from './screens/RegisterScreen';

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreens />} />
        <Route path="/login" element={<LoginScreens />} />
        <Route path="/loginsuccess" element={<LoginSuccess />} />
        <Route path="/register" element={<RegisterScreen />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
