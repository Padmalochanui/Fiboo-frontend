import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";


const Login = () => {



  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onFinish = (values) => {
    const { email, password } = values;
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      redirect: "follow",
    };
    fetch("http://127.0.0.1:8000/api/user/login/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.errors) {
          setError(result.errors?.email[0]);
          console.log("email checking ", result.errors?.email[0]);
        }
        localStorage.setItem("access_token", result.token.access);
        navigate("/Fibonacci/");
      })
      .catch((error) => setError(error.message));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container my-4" >
      <h1 className="text-center bg-primary text-white py-2 rounded">Login To Perform Fibonacci Program</h1>
      <div className="container w-50">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit" className="btn-primary my-4">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <p>{error ? (<p className="text-danger text-center">* Please enter correct credential</p>) : null}</p>
    </div>
  );
};

export default Login;
