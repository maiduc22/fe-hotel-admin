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

export default function UpdateServiceModal({
  isOpen,
  setIsOpen,
  service,
  fetchService,
}) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [_name, setName] = useState("");
  const [_price, setPrice] = useState(0);
  const [_description, setDescription] = useState("");

  const initialValues = service
    ? {
        name: service.name,
        price: service.price,
        description: service.description,
      }
    : null;

  const handleUpdateService = () => {
    const body = {
      id: service.id,
      data: {
        name: _name ? _name : initialValues.name,
        price: _price ? _price : initialValues.price,
        description: _description ? _description : initialValues.description,
      },
    };

    dispatch(actions.updateService(body, () => fetchService()));
    setIsOpen(false);
    form.resetFields();
    // window.location.reload();
  };

  const handleCancelModal = () => {
    setIsOpen(false);
    form.resetFields();
  };

  return (
    <Modal
      title="Update Service"
      open={isOpen}
      onOk={handleUpdateService}
      onCancel={handleCancelModal}
    >
      <Form
        form={form}
        style={{ maxWidth: 600 }}
        {...formItemLayout}
        initialValues={initialValues}
      >
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
