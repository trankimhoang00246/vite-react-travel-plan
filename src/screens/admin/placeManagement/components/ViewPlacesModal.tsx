import { useEffect, useState } from "react";
import placesService from "../../../../services/apis/place/places.api";
import { Card, Modal } from "antd";

interface IProps {
  isModalOpen: boolean;
  id: number;
  setIsModalOpen: (value: boolean) => void;
}

const ViewPlacesModal = (props: IProps) => {
  const { isModalOpen, id, setIsModalOpen } = props;
  const [initialData, setInitialData] = useState<any>();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (id !== 0) {
      placesService.getPlaceDetails(id.toString()).then((res) => {
        setInitialData(res?.data);
      });
    }
  }, [id]);

  return (
    <div>
      <Modal
        title="View Place"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={null}
      >
        <Card>
          <div className="">{initialData?.title}</div>
          <p>{initialData?.description}</p>
          <img src={initialData?.imageUrl} alt={initialData?.name} />
        </Card>
      </Modal>
    </div>
  );
};

export default ViewPlacesModal;
