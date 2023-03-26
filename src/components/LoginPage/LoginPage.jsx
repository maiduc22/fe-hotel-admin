import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/login";

const LoginPage = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Received values of form: ");
    dispatch(
      actions.login({
        username: "maiduc",
        password: "123",
      })
    );
  };

  return (
    <div className="fixed top-0 h-screen w-full flex items-center justify-center bg-blue-300">
      <Form
        name="normal_login"
        className="login-form  px-10 py-5 rounded-xl shadow-2xl  bg-white"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h4 className="w-full text-center mb-8 font-bold text-xl">LOGIN</h4>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item className="mt-8">
          <Button
            type="default"
            htmlType="submit"
            className="login-form-button mr-2"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
