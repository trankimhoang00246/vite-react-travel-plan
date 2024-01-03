import { Col, Modal, Row } from "antd";
import PlacesForm from "./PlacesForm";
import AddressForm from "./AddressForm";
import LinkForm from "./LinkForm";
import CategoryForm from "./CategoryForm";
import ImageForm from "./ImageForm";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const PlacesModal = (props: IProps) => {
  const { isModalOpen, setIsModalOpen } = props;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="Create Place"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <PlacesForm />
        <Row gutter={16}>
          <Col span={12}>
            <AddressForm />
          </Col>
          <Col span={12}>
            <LinkForm />
          </Col>
        </Row>
        <CategoryForm />
        <ImageForm />
      </Modal>
    </div>
  );
};

export default PlacesModal;
