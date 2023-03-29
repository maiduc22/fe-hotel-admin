import { Form, Modal, Button, Tabs, Checkbox } from "antd";
import React from "react";
import RoomServiceSelection from "../ServiceSelection/RoomServiceSelection";

const { TabPane } = Tabs;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

export default function ServiceModal({
  isServiceModalOpen,
  setIsServiceModalOpen,
  rooms,
}) {
  console.log(rooms);
  const [form] = Form.useForm();

  const handleCancelModal = () => {
    setIsServiceModalOpen(false);
    form.resetFields();
  };

  const handleFinishForm = () => {
    setIsServiceModalOpen(false);
    form.resetFields();
  };

  const RoomTabs = () => (
    <Tabs>
      {rooms.map((room) => (
        <TabPane tab={room.name} key={room.name}>
          {/* <p>Check-in: {room.checkin}</p>
          <p>Checkout: {room.checkout}</p>
          <p>Image: {room.image}</p>
          <p>Note: {room.note}</p>
          <p>Status: {room.status}</p>
          <p>Type: {room.type}</p> */}
          <RoomServiceSelection roomId={room.id} />
        </TabPane>
      ))}
    </Tabs>
  );

  return (
    <Modal
      title="Room Service"
      open={isServiceModalOpen}
      onCancel={() => handleCancelModal()}
      onOk={() => handleFinishForm()}
    >
      {/* <Form
        style={{ maxWidth: 600 }}
        {...formItemLayout}
        form={form}
        autoComplete={"off"}
        onFinish={handleFinishForm}
      >
        <Form.Item
          wrapperCol={{
            offset: 20,
            span: 4,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
      <RoomTabs />
    </Modal>
  );
}
