import React from 'react'
import { useState } from 'react';
import { Button, Input, Form, Checkbox } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import {GooglePlusOutlined,UserOutlined,LockOutlined} from '@ant-design/icons';

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Đăng nhập</h1>
      
      <Form name="loginForm"
        initialValues={{ remember: true }}
        style={{ width: 300 }}>
        <Form.Item>
          <GooglePlusOutlined />
          <Button>Sign in with Google</Button>
        </Form.Item>

        <Form.Item>
          <label htmlFor="username">Email</label>
          <Input size="large" prefix={<UserOutlined />}
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='email'
              placeholder='mail@simmmple.com'
              mb='24px'
              fontWeight='500'
              id="username" 
              value={username}
              onChange={handleUsernameChange}/>
        </Form.Item>

      
        <Form.Item>
          <label htmlFor="password">Password</label>
          <Input size="large" prefix={<LockOutlined />}
                isRequired={true}
                fontSize='sm'
                placeholder='Min. 8 characters'
                mb='24px'
                type={showPassword ? "text" : "password"}
                variant='auth' id="password"
                value={password}
                onChange={handlePasswordChange}/>
          <Button type='link'>Forgot password</Button>
        </Form.Item>

        
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
          <Button type='primary'
          onClick={handleLogin}>Sign in</Button>
        </Form.Item>
        
        
        <Form.Item>
          <label>Not registered yet?</label>
          <Button type='link'>Create an Account</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginScreens