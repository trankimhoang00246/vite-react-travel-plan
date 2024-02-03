import { Button, Checkbox, Form, Input } from "antd";
import { FieldType } from "../../services/apis/apiService.interface";

const LoginForm = () => {
  return (
    <div>
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
    </div>
  );
}

export default LoginForm