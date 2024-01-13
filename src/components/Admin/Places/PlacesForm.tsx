import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import IPlacesForm from "../../../types/IPlacesForm";
import TextArea from "antd/es/input/TextArea";
import CategoryService from "../../../services/CategoryService";
import _ from "lodash";
import { useEffect, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import ImageUpload from "./ImageUpload";

interface IOptions {
  value: number;
  label: string;
}

const PlacesForm = () => {
  const time: any = [
    {
      value: "05:00",
      label: "05:00",
    },
    {
      value: "05:30",
      label: "05:30",
    },
    {
      value: "06:00",
      label: "06:00",
    },
    {
      value: "06:30",
      label: "06:30",
    },
    {
      value: "07:00",
      label: "07:00",
    },
    {
      value: "07:30",
      label: "07:30",
    },
    {
      value: "08:00",
      label: "08:00",
    },
    {
      value: "08:30",
      label: "08:30",
    },
    {
      value: "09:00",
      label: "09:00",
    },
    {
      value: "09:30",
      label: "09:30",
    },
    {
      value: "10:00",
      label: "10:00",
    },
    {
      value: "10:30",
      label: "10:30",
    },
    {
      value: "11:00",
      label: "11:00",
    },
    {
      value: "11:30",
      label: "11:30",
    },
    {
      value: "12:00",
      label: "12:00",
    },
    {
      value: "12:30",
      label: "12:30",
    },
    {
      value: "13:00",
      label: "13:00",
    },
    {
      value: "13:30",
      label: "13:30",
    },
    {
      value: "14:00",
      label: "14:00",
    },
    {
      value: "14:30",
      label: "14:30",
    },
    {
      value: "15:00",
      label: "15:00",
    },
    {
      value: "15:30",
      label: "15:30",
    },
    {
      value: "16:00",
      label: "16:00",
    },
    {
      value: "16:30",
      label: "16:30",
    },
    {
      value: "17:00",
      label: "17:00",
    },
    {
      value: "17:30",
      label: "17:30",
    },
    {
      value: "18:00",
      label: "18:00",
    },
    {
      value: "18:30",
      label: "18:30",
    },
    {
      value: "19:00",
      label: "19:00",
    },
    {
      value: "19:30",
      label: "19:30",
    },
    {
      value: "20:00",
      label: "20:00",
    },
    {
      value: "20:30",
      label: "20:30",
    },
    {
      value: "21:00",
      label: "21:00",
    },
    {
      value: "21:30",
      label: "21:30",
    },
    {
      value: "22:00",
      label: "22:00",
    },
    {
      value: "22:30",
      label: "22:30",
    },
    {
      value: "23:00",
      label: "23:00",
    },
    {
      value: "23:30",
      label: "23:30",
    },
  ];
  const [destination, setDestination] = useState<IOptions[]>([]);
  const [selectedItems, setSelectedItems] = useState();
  const [categories, setCategories] = useState<IOptions[]>([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (checked: any) => {
    setIsCheckboxChecked(checked);
  };

  const getAllByCategoryName = () => {
    CategoryService.getAllByCategoryName("area")
      .then((res) => {
        const data = res?.data;

        const transformedData: IOptions[] = _.map(data, (item) => ({
          value: item.id,
          label: item.name,
        }));

        setDestination(transformedData);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });

    CategoryService.getAllByCategoryName("like")
      .then((res) => {
        const data = res?.data;

        const transformedData: IOptions[] = _.map(data, (item) => ({
          value: item.id,
          label: item.name,
        }));

        setCategories(transformedData);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    getAllByCategoryName();
  }, []);

  const onFinish = (values: IPlacesForm) => {
    console.log(values);
  };

  return (
    <div>
      <Form
        name="dynamic_form_item"
        onFinish={onFinish}
        style={{ maxWidth: 1000 }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<IPlacesForm>
              name="title"
              rules={[{ required: true, message: "Please input your title!" }]}
            >
              <Input showCount maxLength={20} placeholder="title" />
            </Form.Item>

            <Form.Item<IPlacesForm>
              name="phoneNumber"
              rules={[
                { required: true, message: "Please input your phoneNumber!" },
              ]}
            >
              <Input showCount maxLength={10} placeholder="phone number" />
            </Form.Item>

            <Form.Item<IPlacesForm>
              name="cost"
              rules={[{ required: true, message: "Please input your cost!" }]}
            >
              <Input placeholder="cost" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item<IPlacesForm>
                  name="minTimePlaces"
                  rules={[
                    {
                      required: true,
                      message: "Please input your minTimePlaces!",
                    },
                  ]}
                >
                  <Input placeholder="Min time" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item<IPlacesForm>
                  name="maxTimePlaces"
                  rules={[
                    {
                      required: true,
                      message: "Please input your maxTimePlaces!",
                    },
                  ]}
                >
                  <Input placeholder="Max time" />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={12}>
            <Form.Item<IPlacesForm>
              name="description"
              rules={[
                { required: true, message: "Please input your description!" },
              ]}
            >
              <TextArea
                style={{ height: 144, resize: "none" }}
                placeholder="description"
              />
            </Form.Item>

            <Row gutter={16}>
              <Col span={4}>
                <Form.Item<IPlacesForm> name="full" valuePropName="checked">
                  <Checkbox
                    onChange={(e) => handleCheckboxChange(e.target.checked)}
                  >
                    24/24
                  </Checkbox>
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item<IPlacesForm> name="beginDay">
                  <Select
                    placeholder="Giờ mở cửa"
                    optionFilterProp="children"
                    options={time}
                    disabled={isCheckboxChecked}
                  />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item<IPlacesForm> name="endDay">
                  <Select
                    placeholder="Giờ đóng cửa"
                    optionFilterProp="children"
                    options={time}
                    disabled={isCheckboxChecked}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="mb-4">
          <Form.Item<IPlacesForm> name="destination">
            <Select
              placeholder="Destination"
              style={{ width: "100%" }}
              options={destination}
            />
          </Form.Item>
        </div>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<IPlacesForm>
              name="addressString"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input placeholder="address" />
            </Form.Item>

            <Form.Item<IPlacesForm>
              name="addressLinkMap"
              rules={[
                { required: true, message: "Please input your link map!" },
              ]}
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
          </Col>
          <Col span={12}>
            <Form.Item<IPlacesForm>
              name="name"
              rules={[
                { required: true, message: "Please input your name web!" },
              ]}
            >
              <Input placeholder="name web" />
            </Form.Item>

            <Form.Item<IPlacesForm>
              name="url"
              rules={[
                { required: true, message: "Please input your url web!" },
              ]}
            >
              <Input placeholder="website" />
            </Form.Item>
          </Col>
        </Row>
        <div className="mb-4">
          <Form.Item<IPlacesForm>
            name="categoryId"
            rules={[{ required: true, message: "Please input your url web!" }]}
          >
            <Select
              mode="multiple"
              placeholder="Categories"
              value={selectedItems}
              onChange={setSelectedItems}
              style={{ width: "100%" }}
              options={categories}
            />
          </Form.Item>
        </div>
        <Form.List name="imageId">
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field) => (
                <Form.Item
                  required={false}
                  key={field.key}
                  className="inline-block"
                >
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message:
                          "Please input passenger's name or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <ImageUpload />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add image
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PlacesForm;
