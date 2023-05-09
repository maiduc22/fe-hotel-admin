import { Button, Popconfirm, Table, Tooltip } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { HiOutlineLockOpen } from "react-icons/hi";
import { AddEmployeeModal } from "../../components/Modal/AddEmployeeModal";
import { useSelector } from "react-redux";

const EmployeeManagementPage = () => {
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [isUpdateEmployeeModalOpen, setIsUpdateEmployeeModalOpen] =
    useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);

  const columns = [
    {
      title: "Full name",
      key: "fullname",
      dataIndex: "fullname",
      align: "center",
    },
    {
      title: "Username",
      key: "username",
      dataIndex: "username",
      align: "center",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (record) => (
        <div className="flex items-center justify-center gap-2" key={record.id}>
          <Tooltip title="Update Employee">
            <AiFillEdit
              onClick={() => {
                setIsUpdateEmployeeModalOpen(true);
                setCurrentRecord(record);
              }}
            />
          </Tooltip>

          <Tooltip title="Delete Employee">
            <Popconfirm
              title="Do you want to delete this employee"
              okText="Yes"
              cancelText="No"
            >
              <HiOutlineLockOpen />
            </Popconfirm>
          </Tooltip>
        </div>
      ),
    },
  ];

  const fetchEmployees = () => {};

  useEffect(() => {
    fetchEmployees();
  });

  const employees = useSelector((state) => state);

  return (
    <div className="w-full ">
      <div className="w-full mb-10 flex justify-end">
        <Button onClick={() => setIsAddEmployeeModalOpen(true)}>
          Add new staff
        </Button>

        <AddEmployeeModal
          isAddEmployeeModalOpen={isAddEmployeeModalOpen}
          setIsAddEmployeeModalOpen={setIsAddEmployeeModalOpen}
          fetchEmployees={fetchEmployees}
        />
      </div>
      <div className="w-full">
        <Table columns={columns} dataSource={[]} rowKey={"id"} />
      </div>
    </div>
  );
};

export default EmployeeManagementPage;
