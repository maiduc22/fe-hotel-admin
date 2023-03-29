import { notification } from "antd";

const showNotification = (
  message = "title",
  description = "description",
  type = "success"
) => {
  notification[type]({
    message,
    description,
  });
};

const parseRoomStatus = (value) => {
  switch (value) {
    case true:
      return "Booked";
    case false:
      return "Available";
    default:
      break;
  }
};

const parseBookingStatus = (isConfirmed) => {
  switch (isConfirmed) {
    case true:
      return "Confirmed";
    case false:
      return "Not confirmed";
    default:
      return;
  }
};

export default {
  showNotification,
  parseRoomStatus,
  parseBookingStatus,
};
