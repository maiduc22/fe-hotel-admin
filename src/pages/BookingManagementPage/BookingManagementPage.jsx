import { Popconfirm, Table, Tag, Input, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { GiCancel, GiConfirmed } from "react-icons/gi";
import { MdRoomService } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ApproveBookingModal from "../../components/Modal/ApproveBookingModal";
import ServiceModal from "../../components/Modal/ServiceModal";
import { CONFIRMED_STATUS, UNCONFIRMED_STATUS } from "../../consts";
import actions from "../../redux/actions/bookings";
import utils from "../../utils";
import { BiCheckShield } from "react-icons/bi";

export default function BookingManagementPage() {
  const [isApproveBookingModalOpen, setIsApproveBookingModalOpen] =
    useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [_record, setRecord] = useState(null);

  const bookingData = useSelector(
    (state) => state.booking_reducer
  ).bookings.filter((booking) =>
    booking.client.fullName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleCancelBooking = (bookingId) => {
    dispatch(actions.cancelBooking(bookingId));
    window.location.reload();
  };

  const handleCheckIn = (bookingId) => {
    dispatch(actions.checkinBooking(bookingId));
    window.location.reload();
  };

  const dispatch = useDispatch();

  const fetchBooking = () => {
    dispatch(actions.getBooking());
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  const renderStatusColor = (status) => {
    switch (status) {
      case "PENDING":
        return "red";
      case "CANCEL":
        return "black";
      case "ACCEPT":
        return "green";
      case "PROGRESS":
        return "blue";
    }
  };

  const columns = [
    {
      title: "Client Name",
      dataIndex: ["client", "fullName"],
      key: "clientName",
      align: "center",
    },
    {
      title: "Client Tel",
      dataIndex: ["client", "tel"],
      key: "clientTel",
      align: "center",
    },
    {
      title: "Room Name",
      dataIndex: "rooms",
      key: "roomName",
      render: (room) => room.map((r, index) => r.name).join(" - "),
      align: "center",
    },
    {
      title: "Check-In Time",
      dataIndex: "rooms",
      key: "checkIn",
      render: (room) => room[0].checkout.split("T")[0],
      align: "center",
    },
    {
      title: "Check-Out Time",
      dataIndex: "rooms",
      key: "checkOut",
      render: (room) => room[0].checkin.split("T")[0],
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "Status",
      render: (status) => <Tag color={renderStatusColor(status)}>{status}</Tag>,
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        let actions = null;
        switch (record.status) {
          case "PENDING":
            actions = (
              <div className="flex items-center justify-center gap-2">
                <Popconfirm
                  title="Cancel booking"
                  description="Are you sure to cancel this booking?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => handleCancelBooking(record.id)}
                >
                  <Tooltip title="Cancel Booking">
                    <GiCancel />
                  </Tooltip>
                </Popconfirm>
                <Tooltip title="Confirm Booking">
                  <GiConfirmed
                    onClick={() => setIsApproveBookingModalOpen(true)}
                  />
                </Tooltip>
                <ApproveBookingModal
                  isApproveBookingModalOpen={isApproveBookingModalOpen}
                  setIsApproveBookingModalOpen={setIsApproveBookingModalOpen}
                  bookingId={record.id}
                />
              </div>
            );
            break;
          case "ACCEPT":
            actions = (
              <div className="flex items-center justify-center gap-2">
                <Tooltip title="Check In">
                  <BiCheckShield onClick={() => handleCheckIn(record.id)} />
                </Tooltip>
              </div>
            );
            break;
          case "PROGRESS":
            actions = (
              <div className="flex items-center justify-center gap-2">
                <Tooltip title="Room Service">
                  <MdRoomService
                    onClick={() => {
                      setIsServiceModalOpen(true);
                      setRecord(record);
                    }}
                  />
                </Tooltip>
                <ServiceModal
                  isServiceModalOpen={isServiceModalOpen}
                  setIsServiceModalOpen={setIsServiceModalOpen}
                  record={_record}
                />
              </div>
            );
            break;
          default:
            actions = null;
        }
        return <div className="text-center">{actions}</div>;
      },
      align: "center",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full mb-10 flex justify-start">
        <Input
          placeholder="Search by client name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-1/5 border-gray-300 border-solid border-2 p-2 rounded-md"
        />
      </div>
      <div>
        <Table columns={columns} dataSource={bookingData}></Table>
      </div>
    </div>
  );
}
