import ButtonLogin from "./ButtonLogin";
import InputLogin from "./InputLogin";
import NavLink from "./NavLink";
import { useState } from "react";

export default function FormLogin(){
    const [isChecked, setIsChecked] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        // Gọi API đăng nhập hoặc xử lý logic đăng nhập ở đây
      };
    return(
        <div className="form-login ">
            <div className=" form-login-container">
                <h1 className="head">SIGN IN</h1>

                <h3 className="head2">Enter your email and password to sign in!</h3>

                <ButtonLogin value="Sign in with Google"/> 
                
                <div className="or">Or</div>

                <label className="label">Email*</label>

                <InputLogin 
                placeholder="Enter your E-mail" 
                type="email"
                value={username}
                onChange={handleUsernameChange}
                />

                <label className="label">Password*</label>  

                <InputLogin 
                placeholder="Enter your Password" 
                type="password"
                value={password}
                onChange={handlePasswordChange}
                />
                
                <input
                className="checkbox"
                type="checkbox"
                checked={isChecked} 
                onChange={handleCheckboxChange}            
                />
                Keep me logged 
                
                <NavLink value="Forgot password?"/>

                <ButtonLogin value="Sign In" onClick={handleSubmit}/>

                <NavLink value="Create an Account"/>
                
            </div>
        </div>
    );
}