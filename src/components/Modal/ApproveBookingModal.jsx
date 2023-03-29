import { Button, Form, Input, InputNumber, Modal } from "antd";

import { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/bookings";

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const ApproveBookingModal = ({
  isApproveBookingModalOpen,
  setIsApproveBookingModalOpen,
  bookingId,
}) => {
  const [form] = Form.useForm();
  const [saleoff, setSaleoff] = useState("");
  const dispatch = useDispatch();
  console.log(bookingId);

  const handleOk = () => {
    dispatch(actions.approveBooking(bookingId));
    console.log(bookingId, saleoff);
    form.resetFields();
    setIsApproveBookingModalOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsApproveBookingModalOpen(false);
  };

  const formatter = (value) => value * 100;
  const parser = (value) => value / 100;

  return (
    <Modal
      title="Approve the Booking"
      open={isApproveBookingModalOpen}
      onCancel={handleCancel}
      footer={""}
    >
      <Form
        style={{ maxWidth: 600 }}
        {...formItemLayout}
        form={form}
        autoComplete="off"
        onFinish={handleOk}
      >
        <Form.Item
          label="Saleoff"
          name="saleoff"
          rules={[{ required: true, message: "Please input the sale off!" }]}
        >
          <InputNumber
            formatter={formatter}
            parser={parser}
            min={0}
            max={1}
            addonAfter={"%"}
            onChange={(value) => setSaleoff(value)}
            value={saleoff}
          />
        </Form.Item>

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
      </Form>
    </Modal>
  );
};

export default ApproveBookingModal;
