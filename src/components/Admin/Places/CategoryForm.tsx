import { Form, Input } from "antd";
import IPlacesForm from "../../../types/IPlacesForm";

const CategoryForm = () => {
  return (
    <div>
      <Form.Item<IPlacesForm>
        name="categoryId"
        rules={[{ required: true, message: "Please input your categoryId!" }]}
      >
        <Input placeholder="category" />
      </Form.Item>
    </div>
  );
};

export default CategoryForm;
