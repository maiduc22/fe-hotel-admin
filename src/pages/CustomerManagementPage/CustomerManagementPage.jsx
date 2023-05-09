import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const CustomerManagementPage = () => {
  const columns = [
    {
      title: "Full name",
      key: "fullname",
      dataIndex: "fullname",
      align: "center",
    },
    {
      title: "Tel",
      key: "tel",
      dataIndex: "tel",
      align: "center",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
      align: "center",
    },
    {
      title: "ID card",
      key: "id_card",
      dataIndex: "id_card",
      align: "center",
    },
  ];

  const dispatch = useDispatch();

  const fetchCustomers = () => {};

  useEffect(() => fetchCustomers(), []);

  return (
    <div className="w-full">
      <Table columns={columns} dataSource={[]} rowKey={"id"} />
    </div>
  );
};

export default CustomerManagementPage;
