import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Input, Form } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // Gửi yêu cầu đặt lại mật khẩu đến API
      const response = await axios.put(
        "https://hochiminh.mobifone.vn/luongAMGP/user/reset-password",
        { email, username }
      );
      setMessage("Reset password thành công! vui lòng kiểm tra lại gmail!");
      navigate("/login");
    } catch (error) {
      // Xử lý lỗi nếu có
      setMessage("Không thể reset được password! Vui lòng kiểm tra lại Username hoặc Email!");
    }
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Form
          layout="vertical"
          name="loginForm"
          initialValues={{ remember: true }}
          style={{ width: 300 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>Reset Password</h1>
          </div>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}>
            <Input
              size="large"
              prefix={<UserOutlined />}
              variant="auth"
              placeholder="simmmple"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}>
            <Input
              size="large"
              prefix={<MailOutlined />}
              placeholder="mail@simmmple.com"
              variant="auth"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Item>
          <label className="error">{message}</label>

          <Form.Item>
            <Button type="primary" size="large" style={{ width: "100%" }} onClick={handleSubmit}>
              Reset password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ForgotPassword;
