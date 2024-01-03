import { Form, Input } from "antd";
import IPlacesForm from "../../../types/IPlacesForm";

const AddressForm = () => {
  return (
    <div>
      <Form.Item<IPlacesForm>
        name="addressString"
        rules={[{ required: true, message: "Please input your address!" }]}
      >
        <Input placeholder="address" />
      </Form.Item>

      <Form.Item<IPlacesForm>
        name="addressLinkMap"
        rules={[{ required: true, message: "Please input your link map!" }]}
      >
        <Input placeholder="link map" />
      </Form.Item>

      <Form.Item<IPlacesForm>
        name="embeddedAddress"
        rules={[
          {
            required: true,
            message: "Please input your embedded address!",
          },
        ]}
      >
        <Input placeholder="embedded address" />
      </Form.Item>
    </div>
  );
};

export default AddressForm;
