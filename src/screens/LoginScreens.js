import React from 'react'
import { useState } from 'react';
import { Button, Input, Form, Checkbox, Image,Alert, Space, Spin } from 'antd';
import {GooglePlusOutlined,UserOutlined,LockOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import  {apiInstance}  from '../Instance';

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

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const response = await apiInstance.post('/auth/login', {
        username: username,
        password: password
      });
  
      const { accessToken, refreshToken } = response.data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      
      setMessage("Bạn đã đăng nhập thành công");
      console.log(response);
      setLoading(false);
      navigate('/loginsuccess');

    } catch (error) {
      console.log(error);
      setMessage("Đăng nhập thất bại");
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

          {loading ? (
          <Space direction="vertical" style={{ width: '100%' }}>
            <Spin tip="Loading" size="large">
              <div className="content" />
            </Spin>
          </Space>
          ) : (
            <div>
              {/* Nội dung hiển thị sau khi tải xong */}
            </div>
          )}
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
          <label className='error'>{message}</label>
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
            <Button type='link' style={{  color: 'red' }}>Create an Account</Button>
          </Form.Item>
        </Form>
      </div>

      
    </div>
  )
}

export default LoginScreens