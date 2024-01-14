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
import { Button } from "antd";
import PlacesModal from "./PlacesModal";

const PlacesTable = () => {
  const [placesData, setPlacesData] = useState<Array<IPlaces>>([]);
  const actionRef = useRef<ActionType>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const getAllNotP = () => {
    PlacesService.getAllNotP()
      .then((res) => {
        //lodash sử lý data
        const data = res?.data;
        const transformedData = _.map(data, (item) => ({
          ...item,
          imageUrl:
            item.imageUrl.length !== 0 ? item?.imageUrl?.first : "/logo.svg",
          category: _.map(item.category, "name"),
        }));

        setPlacesData(transformedData);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  const save = () => {};

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
            action?.startEditable?.(record.id);
          }}
        >
          Sửa
        </a>,
        <a
          href="https://ant.design/components/form"
          target="_blank"
          rel="noopener noreferrer"
          key="view"
        >
          Xem
        </a>,
        <TableDropdown
          key="actionGroup"
          onSelect={() => action?.reload()}
          menus={[
            { key: "copy", name: "Chép" },
            { key: "delete", name: "Xóa" },
          ]}
        />,
      ],
    },
  ];

  // const columns: ProColumns<IPlaces>[] = [
  //   { title: "id", dataIndex: "id", width: 10, sorter: (a, b) => a.id - b.id },
  //   {
  //     title: "Tiêu đề",
  //     dataIndex: "title",
  //     width: 300,
  //     sorter: (a, b) => a.title.localeCompare(b.title),
  //   },
  //   { title: "Mô tả", dataIndex: "description", width: 800 },
  //   {
  //     title: "SDT",
  //     dataIndex: "phoneNumber",
  //     width: 80,
  //     sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
  //   },
  //   {
  //     title: "Điểm đánh giá",
  //     dataIndex: "point",
  //     width: 10,
  //     align: "right",
  //     sorter: (a, b) => a.point - b.point,
  //   },
  //   { title: "Hình ảnh", dataIndex: "imageUrl", width: 10 },
  //   {
  //     title: "Chi phí",
  //     dataIndex: "cost",
  //     width: 10,
  //     align: "right",
  //     sorter: (a, b) => a.cost - b.cost,
  //   },
  //   {
  //     title: "Đếm",
  //     dataIndex: "count",
  //     width: 10,
  //     align: "right",
  //     sorter: (a, b) => a.count - b.count,
  //   },
  //   { title: "Danh mục", dataIndex: "category", width: 10 },
  //   {
  //     title: "Thời gian tối đa",
  //     dataIndex: "minTimePlaces",
  //     width: 10,
  //     sorter: (a, b) => a.minTimePlaces - b.minTimePlaces,
  //   },
  //   {
  //     title: "Thời gian tối thiểu",
  //     dataIndex: "maxTimePlaces",
  //     width: 10,
  //     sorter: (a, b) => a.maxTimePlaces - b.maxTimePlaces,
  //   },
  //   {
  //     title: "Mở cửa 24/24",
  //     dataIndex: "full",
  //     width: 10,
  //     align: "right",
  //     render: (text, record) =>
  //       record.full ? (
  //         <CheckCircleOutlined className="text-green-600" />
  //       ) : (
  //         <CloseCircleOutlined className="text-red-600" />
  //       ),
  //   },
  //   {
  //     title: "Giờ mở của",
  //     dataIndex: "beginDay",
  //     width: 10,
  //     align: "right",
  //     render: (text, record) =>
  //       record.full ? <div>_</div> : <div>{record.beginDay}</div>,
  //   },
  //   {
  //     title: "Giờ đóng cửa",
  //     dataIndex: "endDay",
  //     width: 10,
  //     align: "right",
  //     render: (text, record) =>
  //       record.full ? <div>_</div> : <div>{record.endDay}</div>,
  //   },
  //   {
  //     title: "Ngày tạo",
  //     dataIndex: "createdAt",
  //     width: 10,
  //     sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
  //   },
  //   {
  //     title: "Cập nhật",
  //     dataIndex: "updatedAt",
  //     width: 10,
  //     sorter: (a, b) => a.updatedAt.localeCompare(b.updatedAt),
  //   },
  // ];

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

      <PlacesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default PlacesTable;
