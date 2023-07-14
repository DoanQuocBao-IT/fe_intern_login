import React from 'react'
import { useState } from 'react';

const LoginScreens = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Xử lý logic đăng nhập

    // Lưu trữ tài khoản và mật khẩu nếu checkbox được đánh dấu
    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    // Tiếp tục xử lý đăng nhập
  };

  // Kiểm tra nếu có thông tin đăng nhập được lưu trữ
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');
  const hasStoredCredentials = storedUsername && storedPassword;

  // Đặt giá trị cho ô input dựa trên thông tin đăng nhập lưu trữ (nếu có)
  React.useEffect(() => {
    if (hasStoredCredentials) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, [hasStoredCredentials, storedUsername, storedPassword]);
  return (
    <div className='container'>
      <h1>Đăng nhập</h1>
      <form >
        <div>
          <button>Đăng nhập với Google</button>
        </div>
        <div>
          <label htmlFor="username">Tài khoản:</label>
          <input isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='email'
              placeholder='mail@simmmple.com'
              mb='24px'
              fontWeight='500'
              size='lg' id="username" 
              value={username}
              onChange={handleUsernameChange}/>
        </div>

      
        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input isRequired={true}
                fontSize='sm'
                placeholder='Min. 8 characters'
                mb='24px'
                size='lg'
                type={showPassword ? "text" : "password"}
                variant='auth' id="password"
                value={password}
                onChange={handlePasswordChange}/>
        </div>

        <div>
          <button>Quên mật khẩu</button>
        </div>
        
        <div>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Lưu tài khoản và mật khẩu
          </label>
        </div>
       
        <div>
          <button type="submit"
          onClick={handleLogin}>Đăng nhập</button>
        </div>
        
        
        <div>
          <button>Tạo tài khoản</button>
        </div>
      </form>
    </div>
  )
}

export default LoginScreens