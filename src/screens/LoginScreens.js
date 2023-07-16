import React from 'react'
import { useState } from 'react';
import { Button, Input, Form, Checkbox, Image } from 'antd';
import {GooglePlusOutlined,UserOutlined,LockOutlined} from '@ant-design/icons';
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
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Form name="loginForm"
        initialValues={{ remember: true }}
        style={{ width: 300 }}>
          <h1>Đăng nhập</h1>
          <Form.Item>
            <GooglePlusOutlined />
            <Button size='large'>Sign in with Google</Button>
          </Form.Item>

          <Form.Item label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input size="large" prefix={<UserOutlined />}
                isRequired={true}
                variant='auth'
                type='email'
                placeholder='mail@simmmple.com'
                id="username" 
                value={username}
                onChange={handleUsernameChange}/>
          </Form.Item>

        
          <Form.Item label="Password" 
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password size="large" prefix={<LockOutlined />}
                  isRequired={true}
                  placeholder='Min. 8 characters'
                  variant='auth' 
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}/>
            <Button type='link'>Forgot password</Button>
          </Form.Item>
          <label className='error'>{message}</label>
          
          <Form.Item>
            <label>
              <Checkbox
                name="remember"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Keep me logged in
            </label>
          </Form.Item>
        
          <Form.Item>
            <Button type='primary' size='large'
            onClick={handleLogin}>Sign in</Button>
          </Form.Item>
          
          
          <Form.Item>
            <label>Not registered yet?</label>
            <Button type='link'>Create an Account</Button>
          </Form.Item>
        </Form>
      </div>

      
    </div>
  )
}

export default LoginScreens