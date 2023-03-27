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

export default {
  showNotification,
};
