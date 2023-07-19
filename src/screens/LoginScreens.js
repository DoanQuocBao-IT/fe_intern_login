import React from 'react'
import { useState, useContext } from 'react';
import { Button, Input, Form, Checkbox, Image,Alert, Space } from 'antd';
import {GooglePlusOutlined,UserOutlined,LockOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import  {apiInstance}  from '../Instance';
import { AppContext } from '..';
import axios from 'axios';
import RegisterScreen from './RegisterScreen';
import { Link } from 'react-router-dom';



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

  try {
    const response = await apiInstance.post('/auth/refresh-token', {
      refreshToken: refreshToken
    });

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {load, notify} = useContext(AppContext);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = () => {
    setShowRegister(true);
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
    setLoading(true);

    try {
      const response = await apiInstance.post('/auth/login', {
        username: username,
        password: password
      });
  
      const { accessToken, refreshToken } = response.data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      
      console.log(response);
      setLoading(false);
      navigate('/loginsuccess');

    } catch (error) {     
        notify("Đăng nhập thất bại");
    }
    finally {
      setLoading(false);
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
  const handleResetPassword =() => {
    navigate('/reset-password');
  };
  const handleRegister =() => {
    navigate('/register');
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
        <Form 
        layout="vertical"
        name="loginForm"
        initialValues={{ remember: true }}
        style={{ width: 300 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 >Đăng nhập</h1>
          </div>
          
          <Form.Item>
            
            <Button style={{ width: '100%' }}
            icon={<GooglePlusOutlined size="large"  style={{ fontSize: '16px', color: 'red' }}/>}
            size='large'>Sign in with Google</Button>
          </Form.Item>

          <Form.Item label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input size="large" prefix={<UserOutlined />}
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
                  placeholder='Min. 8 characters'
                  variant='auth' 
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}/>    
            
          </Form.Item>
          <Form.Item>
            <label >
              <Checkbox
                name="remember"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Keep me logged in
            </label>
            <Button type='link' style={{ float: 'right' , color: 'red' }} onClick={handleResetPassword}>Forgot password</Button>

          </Form.Item>
          <Form.Item>
            <Button type='primary' size='large' style={{ width: '100%' }}
            onClick={handleLogin}>Sign in</Button>
          </Form.Item>
          
          
          <Form.Item>
            <label>Not registered yet?</label>
            <Button type='link' style={{  color: 'red' }}
            onClick={handleRegister}>Create an Account</Button>
          </Form.Item>
        </Form>
        {loading && load}
      </div>
    </div>
  )
}

export default LoginScreens