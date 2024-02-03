

import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAcessToken } from "../utils/helper";
import { login } from "../Services/userApi";

const Login = () => {
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const accessToken = getAcessToken();

  // if (accessToken) {
  //   return <Navigate to="/home" replace />;
  // }

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const response = await login(values);
    localStorage.setItem("access-token", response.data.token);
    localStorage.getItem("access-token");
    navigate("/home");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="container-login">
      <Card title="LOGIN" bordered={false} className="card-login">
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              // loading={loading}
              onClick={handleLogin}
            >
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
