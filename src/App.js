import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import HomeScreens from './screens/HomeScreens';
import LoginScreens from './screens/LoginScreens';
import LoginSuccess from './screens/LoginSuccess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreens />} />
        <Route path="/login" element={<LoginScreens />} />
        <Route path="/loginsuccess" element={<LoginSuccess />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
