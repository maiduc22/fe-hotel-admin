import { Button, Form, Input, Typography } from "antd";
import utils from "../../utils";
import actions from "../../redux/actions/login";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const { Text } = Typography;

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
    dispatch(actions.register(value));
    utils.showNotification(
      "Success",
      "Create new employee account successfullt",
      "success"
    );
    form.resetFields();
  };

  if (isUserAdmin) {
    return (
      <>
        <Form {...formItemLayout} onFinish={(value) => handleSubmit(value)}>
          <Form.Item name={"username"} label="Employee Name">
            <Input />
          </Form.Item>
          <Form.Item name={"password"} label="Password">
            <Input />
          </Form.Item>
          <Form.Item labelCol={12} wrapperCol={12}>
            <Button htmlType="submit" type="primary">
              Create Account
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};
