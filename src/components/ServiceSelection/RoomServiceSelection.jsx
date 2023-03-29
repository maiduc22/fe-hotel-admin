import { useState } from "react";
import { Checkbox } from "antd";

const services = ["Breakfast", "Wifi", "TV", "Air conditioning"];

const RoomServiceSelection = ({ roomId }) => {
  const [selectedServices, setSelectedServices] = useState({});

  const handleServiceChange = (roomId, service) => {
    setSelectedServices((prevState) => ({
      ...prevState,
      [roomId]: {
        ...prevState[roomId],
        [service]: !prevState[roomId]?.[service],
      },
    }));
  };

  const renderServiceCheckboxes = (roomId) => {
    return services.map((service) => (
      <Checkbox
        key={service}
        checked={selectedServices[roomId]?.[service]}
        onChange={() => handleServiceChange(roomId, service)}
      >
        {service}
      </Checkbox>
    ));
  };

  return <>{renderServiceCheckboxes(roomId)}</>;
};

export default RoomServiceSelection;
