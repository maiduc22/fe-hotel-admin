import { Button, Form, Input } from "antd";
import utils from "../../utils";
import actions from "../../redux/actions/login";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

export const CreateEmployeeAccountPage = () => {
  const isUserAdmin = utils.isAdmin();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = (value) => {
    console.log(value);
    dispatch(actions.register(value));
    form.resetFields();
  };

  if (isUserAdmin) {
    return (
      <Form {...formItemLayout} onFinish={(value) => handleSubmit(value)}>
        <Form.Item name={"username"} label="Employee Name">
          <Input />
        </Form.Item>
        <Form.Item name={"password"} label="Password">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Create Account</Button>
        </Form.Item>
      </Form>
    );
  } else {
    return <Navigate to="/" />;
  }
};
