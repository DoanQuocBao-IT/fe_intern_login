import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const setAccessToken = (accessToken) => {
  localStorage.setItem('accessToken', accessToken);
};

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

export const setRefreshToken = (refreshToken) => {
  localStorage.setItem('refreshToken', refreshToken);
};

export const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  try {
    const response = await axios.post('https://hochiminh.mobifone.vn/luongAMGP/auth/refresh-token', {
      refreshToken: refreshToken
    }, config);

    const newAccessToken = response.data.accessToken;
    setAccessToken(newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.log(error);
    throw new Error('Lỗi khi làm mới access token');
  }
};

const LoginScreens = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  
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

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage('');

    const config = {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    try {
      const response = await axios.post('https://hochiminh.mobifone.vn/luongAMGP/auth/login', {
        username: username,
        password: password
      }, config);
  
      const { accessToken, refreshToken } = response.data;
  
      setMessage("Bạn đã đăng nhập thành công");
      console.log(response);
      navigate('/loginsuccess');

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
    } catch (error) {
      console.log(error);
      setMessage("Đăng nhập thất bại");
    }

    // Lưu trữ tài khoản và mật khẩu nếu checkbox được đánh dấu
    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

   
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
        <label className='error'>{message}</label>
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
