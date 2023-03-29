import { Table, Tag } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CONFIRMED_STATUS, UNCONFIRMED_STATUS } from "../../consts";
import actions from "../../redux/actions/bookings";
import utils from "../../utils";
import { Popconfirm } from "antd";
import { GiConfirmed, GiCancel } from "react-icons/gi";
import axios from "../../axios";
import { useState } from "react";
import ApproveBookingModal from "../../components/Modal/ApproveBookingModal";

export default function BookingManagementPage() {
  const [isApproveBookingModalOpen, setIsApproveBookingModalOpen] =
    useState(false);

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
      render: (room) => room.map((r) => r.name).join(", "),
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
      dataIndex: ["client", "isConfirmed"],
      key: "Status",
      render: (isConfirmed) => (
        <Tag color={isConfirmed ? CONFIRMED_STATUS : UNCONFIRMED_STATUS}>
          {utils.parseBookingStatus(isConfirmed)}
        </Tag>
      ),
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (id) => (
        <div className="flex items-center justify-center gap-2">
          <Popconfirm
            title="Cancel booking"
            description="Are you sure to cancel this booking?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleCancelBooking(id)}
          >
            <GiCancel />
          </Popconfirm>

          <GiConfirmed onClick={() => setIsApproveBookingModalOpen(true)} />
          <ApproveBookingModal
            isApproveBookingModalOpen={isApproveBookingModalOpen}
            setIsApproveBookingModalOpen={setIsApproveBookingModalOpen}
            bookingId={id}
          />
        </div>
      ),
      align: "center",
    },
  ];

  const handleCancelBooking = (bookingId) => {
    dispatch(actions.cancelBooking(bookingId));
  };

  const dispatch = useDispatch();

  const fetchBooking = () => {
    dispatch(actions.getBooking());
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  const bookingData = useSelector((state) => state.booking_reducer).bookings;
  console.log(bookingData);

  return (
    <div className="w-full">
      <div className="w-full mb-10"></div>
      <div>
        <Table columns={columns} dataSource={bookingData}></Table>
      </div>
    </div>
  );
}
