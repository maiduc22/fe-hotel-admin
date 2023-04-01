import React from "react";
import { Table, Button, Modal, Form, Input, InputNumber } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/services";

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

export default function CreateServiceModal({ isOpen, setIsOpen }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [_name, setName] = useState("");
  const [_price, setPrice] = useState();
  const [_description, setDescription] = useState("");

  const createService = (data) => {
    dispatch(actions.createService(data));
  };
  const handleCreateService = () => {
    const data = { name: _name, price: _price, description: _description };
    console.log();
    dispatch(actions.createService(data));
    setIsOpen(false);
    form.resetFields();
    window.location.reload(); 
  };

  const handleCancelModal = () => {
    setIsOpen(false);
    form.resetFields();
  };

  return (
    <Modal
      title="Add Service"
      visible={isOpen}
      onOk={handleCreateService}
      onCancel={handleCancelModal}
    >
      <Form form={form} style={{ maxWidth: 600 }} {...formItemLayout}>
        <Form.Item
          label="Service Name"
          name="name"
          rules={[
            { required: true, message: "Please input the service name!" },
          ]}
        >
          <Input value={_name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            { required: true, message: "Please input the service price!" },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            value={_price}
            onChange={(value) => setPrice(value)}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input the service description!",
            },
          ]}
        >
          <Input
            value={_description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
