import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Upload,
  Modal,
  InputNumber,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import CategoryService from "../../../../services/apis/category/category.api";
import _ from "lodash";
import { useEffect, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import apiService from "../../../../services/apis/apiService.api";
import IPlacesForm from "../../../../services/apis/place/places.interface";

interface IOptions {
  value: number;
  label: string;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface PlacesFormProps {
  onSubmit: (formData: any) => void;
  initialData?: any;
  action?: string;
}

const PlacesForm = (props: PlacesFormProps) => {
  const { onSubmit, initialData, action } = props;
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
  const [fields, setFields] = useState<any>();

  // image upload
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  //------------------------------------------------------

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

  const onFinish = async (values: IPlacesForm) => {
    const imageId: number[] = initialData?.imageId;
    let addressId: number = initialData?.addressDto.id;
    let linkId: number = initialData?.link.id;

    if (!action) {
      _.forEach(fileList, async (element) => {
        await apiService
          .uploadImage(element)
          .then((res) => {
            console.log(res);
            imageId.push(res.imageId);
          })
          .catch((e: Error) => {
            console.log(e.message);
          });
      });
      console.log(imageId);

      console.log("call api save address");
      await apiService
        .saveAddress(
          values.addressString,
          values.addressLinkMap,
          values.embeddedAddress
        )
        .then((res) => {
          addressId = res.id;
        })
        .catch((e: Error) => {
          console.log(e.message);
        });

      console.log("call api save link");
      await apiService
        .saveLink(values.name, values.url)
        .then((res) => {
          linkId = res.id;
        })
        .catch((e: Error) => {
          console.log(e.message);
        });
    }

    const cost: number = values.cost;
    const minTimePlaces: number = values.minTimePlaces;
    const maxTimePlaces: number = values.maxTimePlaces;
    const categoryId: number[] = values.categoryId;
    categoryId.push(values.destination);

    let beginDay: string = values.beginDay;
    let endDay: string = values.endDay;
    if (values.full) {
      beginDay = "00:00";
      endDay = "00:00";
    }

    const placeData: any = {
      id: initialData?.id,
      title: values.title,
      phoneNumber: values.phoneNumber,
      description: values.description,
      cost,
      beginDay,
      endDay,
      minTimePlaces,
      maxTimePlaces,
      categoryId,
      imageId,
      linkId,
      addressId,
      full: values.full,
    };

    console.log("place data form: ", placeData);

    onSubmit(placeData);
  };

  useEffect(() => {
    if (initialData) {
      console.log(initialData);
      const categoryId: number[] = [];

      const category: any = initialData?.category;
      _.forEach(category, (item) => {
        categoryId.push(item.id);
      });

      const image = initialData.imageUrl;
      setFileList(
        _.map(image, (item) => ({
          uid: item,
          name: item,
          status: "done",
          url: item,
        }))
      );

      setFields([
        { name: ["title"], value: initialData?.title },
        { name: ["phoneNumber"], value: initialData?.phoneNumber },
        { name: ["cost"], value: initialData?.cost },
        { name: ["minTimePlaces"], value: initialData?.minTimePlaces },
        { name: ["maxTimePlaces"], value: initialData?.maxTimePlaces },
        { name: ["description"], value: initialData?.description },
        { name: ["full"], value: initialData?.full },
        {
          name: ["addressString"],
          value: initialData?.addressDto.addressString,
        },
        {
          name: ["addressLinkMap"],
          value: initialData?.addressDto.addressLinkMap,
        },
        {
          name: ["embeddedAddress"],
          value: initialData?.addressDto.embeddedAddress,
        },
        { name: ["name"], value: initialData?.link.name },
        { name: ["url"], value: initialData?.link.url },
        { name: ["beginDay"], value: initialData?.beginDay },
        { name: ["endDay"], value: initialData?.endDay },
        { name: ["categoryId"], value: categoryId }, //category
      ]);
    }
  }, [initialData]);

  return (
    <div>
      <Form
        name="Form places"
        onFinish={onFinish}
        style={{ maxWidth: 1000 }}
        fields={fields}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<IPlacesForm>
              name="title"
              rules={[{ required: true, message: "Please input your title!" }]}
            >
              <Input showCount maxLength={40} placeholder="title" />
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
              <InputNumber min={15} max={100000} placeholder="cost" />
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
                  <InputNumber min={15} max={60} placeholder="Min time" />
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
                  <InputNumber min={15} max={300} placeholder="Max time" />
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

        <Form.List name="tag">
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
                        message: "Please input tag",
                      },
                    ]}
                    noStyle
                  >
                    <Input />
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
                  Add tag
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        <div>
          <Upload
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </div>

        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PlacesForm;
