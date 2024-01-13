import { Modal } from "antd";
import PlacesForm from "./PlacesForm";

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
      </Modal>
    </div>
  );
};

export default PlacesModal;
