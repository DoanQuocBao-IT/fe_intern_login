import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import HomeScreens from './screens/HomeScreens';
import LoginScreens from './screens/LoginScreens';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreens />} />
        <Route path="/login" element={<LoginScreens />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
