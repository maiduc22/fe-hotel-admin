import { Button } from "antd";
import React, { useState } from "react";
import AddRoomModal from "../../components/Modal/AddRoomModal";

export default function RoomManagementPage() {
  const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState(false);

  return (
    <div className="page">
      <Button onClick={() => setIsAddRoomModalOpen(true)}>Add new room</Button>
      <AddRoomModal
        isAddRoomModalOpen={isAddRoomModalOpen}
        setAddRoomModalOpen={setIsAddRoomModalOpen}
      />
      <img src="" />
    </div>
  );
}
