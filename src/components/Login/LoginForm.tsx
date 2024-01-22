import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import ApiService from "../../services/ApiService";

const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    login(values.username, values.password);
  };

  const login = (username: string, password: string) => {
    ApiService.login(username, password).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.token);
      localStorage.setItem("refreshToken", res.refreshToken);
      localStorage.setItem("username", res.username);

      window.location.href = "/";
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <div className="bg-white px-8 pt-6 pb-2 shadow-md rounded-lg">
      <div>
        Welcome back to{" "}
        <Link to={"/"}>
          <span className="text-second">TravelPlan</span>
        </Link>
      </div>
      <div className="text-2xl font-semibold mt-2 mb-6">Log in</div>

      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item className="flex justify-center">
          <Button className="bg-main text-white border-none" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
