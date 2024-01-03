import { Form, Input } from "antd";
import IPlacesForm from "../../../types/IPlacesForm";

const LinkForm = () => {
  return (
    <div>
      <Form.Item<IPlacesForm>
        name="name"
        rules={[{ required: true, message: "Please input your name web!" }]}
      >
        <Input placeholder="name web" />
      </Form.Item>

      <Form.Item<IPlacesForm>
        name="url"
        rules={[{ required: true, message: "Please input your url web!" }]}
      >
        <Input placeholder="website" />
      </Form.Item>
    </div>
  );
};

export default LinkForm;
