import React from "react";
import { Button, Modal, Table, Tooltip } from "antd";
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
    window.location.reload();
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
      title: "Actions",
      align: "center",
      render: (record) => (
        <div className="flex items-center justify-center gap-4">
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
  }, []);

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