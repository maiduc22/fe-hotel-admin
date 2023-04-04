import React from "react";
import { Button, Modal, Table, Tag, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/services";
import { useEffect } from "react";
import { useState } from "react";
import CreateServiceModal from "../../components/Modal/CreateServiceModal";
import { BiBlock } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import UpdateServiceModal from "../../components/Modal/UpdateServiceModal";

export default function ServiceManagementPage() {
  const [_isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [_isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [_record, setRecord] = useState(null);

  const handleInactiveService = (serviceId) => {
    dispatch(actions.inactiveService(serviceId));
    fetchService();
    // window.location.reload();
  };

  const renderActiveStyle = (status) => {
    switch (status) {
      case "ACTIVE":
        return "green";
      case "INACTIVE":
        return "red";
    }
  };

  const columns = [
    {
      title: "Service Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: "Status",
      align: "center",
      key: "status",
      dataIndex: "status",
      render: (status, index) => (
        <Tag key={index} color={renderActiveStyle(status)}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Actions",
      align: "center",
      key: "actions",
      render: (record) => (
        <div className="flex items-center justify-center gap-4" key={record.id}>
          <Tooltip title="Update Service">
            <AiFillEdit
              onClick={() => {
                setIsUpdateModalOpen(true);
                setRecord(record);
              }}
            />
          </Tooltip>
          <Tooltip title="Inactive Service">
            <BiBlock onClick={() => handleInactiveService(record.id)} />
          </Tooltip>

          <UpdateServiceModal
            isOpen={_isUpdateModalOpen}
            setIsOpen={setIsUpdateModalOpen}
            service={_record}
          />
        </div>
      ),
    },
  ];

  const dispatch = useDispatch();

  const fetchService = () => {
    dispatch(actions.getService());
  };

  useEffect(() => {
    fetchService();
  }, [dispatch]);

  const service = useSelector((state) => state.service_reducer).service;

  return (
    <div className="w-full ">
      <div className="w-full mb-10 flex justify-end">
        <Button onClick={() => setIsCreateModalOpen(true)}>
          Create new Service
        </Button>
        <CreateServiceModal
          isOpen={_isCreateModalOpen}
          setIsOpen={setIsCreateModalOpen}
        />
      </div>
      <div className="w-full">
        <Table columns={columns} dataSource={service} />
      </div>
    </div>
  );
}
