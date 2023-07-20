import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreens from "./screens/HomeScreens";
import LoginScreens from "./screens/LoginScreens";
import LoginSuccess from "./screens/LoginSuccess";
import ForgotPassword from "./screens/ForgotPassword";
import { gapi } from "gapi-script";

function App() {
  // Xử lý google api login
  gapi.load("client:auth2", () => {
    gapi.auth2.init({
      clientId: "455442902148-h3q556ghk05ff09h0qi7mudh6g0rf45i.apps.googleusercontent.com",
      scope: "",
    });
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreens />} />
        <Route path="/login" element={<LoginScreens />} />
        <Route path="/loginsuccess" element={<LoginSuccess />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/register" element={<RegisterScreen />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
