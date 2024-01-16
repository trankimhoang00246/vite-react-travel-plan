import { Modal } from "antd";
import PlacesForm from "./PlacesForm";
import { useEffect, useState } from "react";
import PlacesService from "../../../services/PlacesService";

interface IProps {
  isModalOpen: boolean;
  id: number;
  setIsModalOpen: (value: boolean) => void;
}

const UpdatePlacesModal = (props: IProps) => {
  const { isModalOpen, id, setIsModalOpen } = props;
  const [initialData, setInitialData] = useState<any>();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const updatePlace = async (placeData: any) => {
    console.log(placeData);

    setIsModalOpen(false);
  };

  useEffect(() => {
    PlacesService.getPlaceDetails(id.toString()).then((res) => {
      setInitialData(res?.data);
    });
  }, []);

  return (
    <div>
      <Modal
        title="Update Place"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <PlacesForm onSubmit={updatePlace} initialData={initialData} />
      </Modal>
    </div>
  );
};

export default UpdatePlacesModal;
