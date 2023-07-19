import React, { useState } from 'react';
import { Button, Input, Form} from 'antd';
import { UserOutlined, LockOutlined,BarcodeOutlined,ContactsOutlined,MailOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';


const RegisterScreen = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telNumber, setTelNumber] = useState('');
    const [empCode, setEmpCode] = useState('');
    const [message, setMessage] = useState('');
    const [form] = Form.useForm();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleRegister = async (event) => {
        event.preventDefault();


        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        try {
            const values = await form.validateFields();
            const response = await axios.post('https://hochiminh.mobifone.vn/luongAMGP/user/register', {
                userName: values.username,
                name: values.name,
                password: values.password,
                email: values.email,
                telNumber: values.telNumber,
                empCode: values.empCode
            }, config);
            setMessage('Đăng ký tài khoản thành công!');
            console.log(response);
        } catch (error) {
            console.log(error);
            setMessage('Đăng ký tài khoản thất bại!');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <Form name="registerForm" style={{ width: 300 }}> */}
                <Form layout="vertical"
                name="registerForm" form={form} style={{ width: 300 }}>
                    <h1>Đăng ký tài khoản</h1>

                    <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input
                            size="large"
                            prefix={<UserOutlined />}
                            variant='auth'
                            type='email'
                            placeholder='mail@simmmple.com'
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password
                            size="large"
                            prefix={<LockOutlined />}
                            placeholder='Min. 8 characters'
                            variant='auth'
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </Form.Item>
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                        <Input size="large" 
                        prefix={<ContactsOutlined />}
                        value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                        <Input size="large" 
                        prefix={<MailOutlined />}
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="telNumber" name="telNumber" rules={[{ required: true, message: 'Please input your telNumber!' }]}>
                        <Input size="large" 
                        prefix={<ContactsOutlined />}
                        value={telNumber} onChange={(e) => setTelNumber(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="empCode" name="empCode" rules={[{ required: true, message: 'Please input your empCode!' }]}>
                        <Input size="large" 
                        prefix={<BarcodeOutlined />}
                        value={empCode} onChange={(e) => setEmpCode(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <label className='error'>{message}</label>
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' size='large' style={{ width: '100%' }}
                        onClick={handleRegister}>
                            Sign up
                        </Button>
                    </Form.Item>
                    {/* <Form.Item>
                        <label>Already have an account?</label>
                        <Button type='link' onClick={() => navigate('/login')}>
                            Sign in
                        </Button>
                    </Form.Item> */}
                    <Form.Item>
                        <label>Already have an account?</label>
                        <Link to="/login">Sign In</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default RegisterScreen;
