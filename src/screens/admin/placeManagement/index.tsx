import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import {
  ProTable,
  type ProColumns,
  ActionType,
} from "@ant-design/pro-components";
import { useEffect, useRef, useState } from "react";
import PlacesService from "../../../services/apis/place/places.api";
import _ from "lodash";
import { Button } from "antd";
import CreatePlacesModal from "./components/CreatePlacesModal";
import UpdatePlacesModal from "./components/UpdatePlacesModal";
import IPlaces from "../../../services/apis/place/places.interface";
import ViewPlacesModal from "./components/ViewPlacesModal";

const PlacesPage = () => {
  const [placesData, setPlacesData] = useState<Array<IPlaces>>([]);
  const actionRef = useRef<ActionType>();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [idUpdate, setIdUpdate] = useState(0);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [idView, setIdView] = useState(0);

  const deletePlaces = (id: number) => {
    PlacesService.deletePlaces(id.toString())
      .then((res) => {
        console.log(res);
        getAllNotP();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const getAllNotP = () => {
    PlacesService.getAllNotP()
      .then((res) => {
        //lodash sử lý data
        const data = res?.data;
        const transformedData = _.map(data, (item) => ({
          ...item,
          imageUrl: item.imageUrl[0] ? item.imageUrl[0] : "/logo.svg",
          category: _.map(item.category, "name"),
        }));
        console.log(transformedData);
        setPlacesData(transformedData);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllNotP();
  }, []);

  const columns: ProColumns<IPlaces>[] = [
    { title: "id", dataIndex: "id", width: 10, sorter: (a, b) => a.id - b.id },
    {
      title: "Hình ảnh",
      dataIndex: "imageUrl",
      width: 10,
      render: (text, record) => <img src={record.imageUrl} />,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      width: 150,
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "SDT",
      dataIndex: "phoneNumber",
      align: "right",
      width: 50,
      sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
    },
    {
      title: "Chi phí",
      dataIndex: "cost",
      width: 10,
      align: "right",
      sorter: (a, b) => a.cost - b.cost,
    },
    {
      title: "Mở cửa 24/24",
      dataIndex: "full",
      width: 10,
      align: "right",
      //Tạo bộ lọc
      filters: [
        { text: "True", value: true },
        { text: "False", value: false },
      ],
      onFilter: (value, record) => record.full === value,
      render: (text, record) =>
        record.full ? (
          <CheckCircleOutlined className="text-green-600" />
        ) : (
          <CloseCircleOutlined className="text-red-600" />
        ),
    },
    {
      title: "Giờ mở của",
      dataIndex: "beginDay",
      width: 10,
      align: "right",
      render: (text, record) =>
        record.full ? <div>_</div> : <div>{record.beginDay}</div>,
    },
    {
      title: "Giờ đóng cửa",
      dataIndex: "endDay",
      width: 10,
      align: "right",
      render: (text, record) =>
        record.full ? <div>_</div> : <div>{record.endDay}</div>,
    },
    {
      title: "Vận hành",
      key: "option",
      width: 10,
      render: (text, record) => [
        <Button
          key="editable"
          onClick={() => {
            setIdUpdate(record.id);
            setIsUpdateModalOpen(true);
          }}
        >
          Sửa
        </Button>,
        <Button
          className="mx-2"
          key="view"
          onClick={() => {
            setIdView(record.id);
            setIsViewModalOpen(true);
          }}
        >
          Xem
        </Button>,
        <Button
          key="delete"
          type="dashed"
          onClick={() => {
            deletePlaces(record.id);
          }}
        >
          Delete
        </Button>,
      ],
    },
  ];

  return (
    <div>
      <ProTable<IPlaces>
        dataSource={placesData}
        rowKey="key"
        pagination={{
          showQuickJumper: true,
        }}
        columns={columns}
        actionRef={actionRef}
        search={false}
        dateFormatter="string"
        headerTitle="Crud Địa Điểm"
        toolBarRender={() => [
          <Button key="new" onClick={() => setIsCreateModalOpen(true)}>
            Tạo mới
          </Button>,
          <Button
            key="reload"
            onClick={() => {
              actionRef.current?.reload();
            }}
          >
            Tải lại
          </Button>,
        ]}
      />

      <CreatePlacesModal
        isModalOpen={isCreateModalOpen}
        setIsModalOpen={setIsCreateModalOpen}
      />

      <UpdatePlacesModal
        isModalOpen={isUpdateModalOpen}
        setIsModalOpen={setIsUpdateModalOpen}
        id={idUpdate}
      />

      <ViewPlacesModal
        isModalOpen={isViewModalOpen}
        setIsModalOpen={setIsViewModalOpen}
        id={idView}
      />
    </div>
  );
};

export default PlacesPage;
