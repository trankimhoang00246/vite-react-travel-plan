import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import {
  ProTable,
  type ProColumns,
  TableDropdown,
  ActionType,
} from "@ant-design/pro-components";
import IPlaces from "../../../types/IPlaces";
import { useEffect, useRef, useState } from "react";
import PlacesService from "../../../services/PlacesService";
import _ from "lodash";
import { Button, MenuProps } from "antd";
import { Link } from "react-router-dom";
import CreatePlacesModal from "./CreatePlacesModal";
import UpdatePlacesModal from "./UpdatePlacesModal";

const PlacesTable = () => {
  const [placesData, setPlacesData] = useState<Array<IPlaces>>([]);
  const actionRef = useRef<ActionType>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [idUpdate, setIdUpdate] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showUpdateModal = (id: number) => {
    setIdUpdate(id);
    console.log("id ", id);
    setIsUpdateModalOpen(true);
  };

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
      title: "Số sao",
      dataIndex: "point",
      width: 10,
      align: "right",
      sorter: (a, b) => a.point - b.point,
    },
    {
      title: "Chi phí",
      dataIndex: "cost",
      width: 10,
      align: "right",
      sorter: (a, b) => a.cost - b.cost,
    },
    {
      title: "Đếm",
      dataIndex: "count",
      width: 5,
      align: "right",
      sorter: (a, b) => a.count - b.count,
    },
    { title: "Danh mục", dataIndex: "category", width: 10 },
    {
      title: "Max time",
      dataIndex: "minTimePlaces",
      align: "right",
      width: 10,
      sorter: (a, b) => a.minTimePlaces - b.minTimePlaces,
    },
    {
      title: "Min time",
      dataIndex: "maxTimePlaces",
      align: "right",
      width: 10,
      sorter: (a, b) => a.maxTimePlaces - b.maxTimePlaces,
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
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            showUpdateModal(record.id);
          }}
        >
          Sửa
        </a>,
        <Link
          className="mx-2"
          to={`/admin/places/${record.id}`}
          rel="noopener noreferrer"
          key="view"
        >
          Xem
        </Link>,
        <a
          key="delete"
          onClick={() => {
            deletePlaces(record.id);
          }}
        >
          Delete
        </a>,
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
          <Button key="new" onClick={() => showModal()}>
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
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <UpdatePlacesModal
        isModalOpen={isUpdateModalOpen}
        setIsModalOpen={setIsUpdateModalOpen}
        id={idUpdate}
      />
    </div>
  );
};

export default PlacesTable;
