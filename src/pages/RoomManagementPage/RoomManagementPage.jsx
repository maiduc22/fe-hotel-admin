import { Button, Popconfirm, Table, Tag } from "antd";
import React, { useState } from "react";
import AddRoomModal from "../../components/Modal/AddRoomModal";
import { AVAILABLE_COLOR, BOOKED_COLOR } from "../../consts";
import utils from "../../utils";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function RoomManagementPage() {
  const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState(false);

  const handleDeleteRoom = () => {
    console.log("Deleted room");
  };
  const dataSource = [
    {
      name: "Room 404",
      type: "Single",
      price: 100,
      description: "Room with view to the sea",
      status: true,
    },
    {
      name: "Room 404",
      type: "Single",
      price: 100,
      description: "Room with view to the sea",
      status: true,
    },
    {
      name: "Room 404",
      type: "Single",
      price: 100,
      description: "Room with view to the sea",
      status: true,
    },
    {
      name: "Room 404",
      type: "Single",
      price: 100,
      description: "Room with view to the sea",
      status: true,
    },
    {
      name: "Room 404",
      type: "Single",
      price: 100,
      description: "Room with view to the sea",
      status: false,
    },
    {
      name: "Room 404",
      type: "Single",
      price: 100,
      description: "Room with view to the sea",
      status: true,
    },

    {
      name: "Room 404",
      type: "Single",
      price: 100,
      description: "Room with view to the sea",
      status: false,
    },
    {
      name: "Room 404",
      type: "Single",
      price: 100,
      description: "Room with view to the sea",
      status: true,
    },
  ];
  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
      align: "center",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      align: "center",
    },
    {
      title: "Description",
      key: "description",
      dataIndex: "description",
      align: "center",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      align: "center",
      render: (status) => (
        <Tag color={status ? BOOKED_COLOR : AVAILABLE_COLOR}>
          {utils.parseRoomStatus(status)}
        </Tag>
      ),
    },
    {
      title: "Action",
      align: "center",
      render: () => (
        <div className="flex items-center justify-center gap-2">
          <Popconfirm
            title="Do you want to delete this room"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDeleteRoom()}
          >
            <AiFillDelete />
          </Popconfirm>
          <AiFillEdit />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full ">
      <div className="w-full mb-10 ">
        <Button onClick={() => setIsAddRoomModalOpen(true)}>
          Add new room
        </Button>
        <AddRoomModal
          isAddRoomModalOpen={isAddRoomModalOpen}
          setAddRoomModalOpen={setIsAddRoomModalOpen}
        />
      </div>
      <div className="w-full">
        <Table columns={columns} dataSource={dataSource}></Table>
      </div>
    </div>
  );
}
