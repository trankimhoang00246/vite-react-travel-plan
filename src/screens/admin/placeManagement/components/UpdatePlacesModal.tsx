import { Modal } from "antd";
import PlacesForm from "./PlacesForm";
import { useEffect, useState } from "react";
import PlacesService from "../../../../services/apis/place/places.api";

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
    console.log("data updated: ", placeData);
    await PlacesService.updatePlaces(placeData, placeData.id)
      .then((res) => {
        console.log(res);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (id !== 0) {
      PlacesService.getPlaceDetails(id.toString()).then((res) => {
        setInitialData(res?.data);
        console.log(res?.data);
      });
    }
  }, [id]);

  return (
    <div>
      <Modal
        title="Update Place"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <PlacesForm
          onSubmit={updatePlace}
          initialData={initialData}
          action="update"
        />
      </Modal>
    </div>
  );
};

export default UpdatePlacesModal;
