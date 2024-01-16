import { Modal } from "antd";
import PlacesForm from "./PlacesForm";
import IPlacesForm from "../../../types/IPlacesForm";
import PlacesService from "../../../services/PlacesService";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const CreatePlacesModal = (props: IProps) => {
  const { isModalOpen, setIsModalOpen } = props;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const createPlace = async (placeData: IPlacesForm) => {
    await PlacesService.savePlaces(placeData)
      .then((res) => {
        console.log(res);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });

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
        <PlacesForm onSubmit={createPlace} />
      </Modal>
    </div>
  );
};

export default CreatePlacesModal;
