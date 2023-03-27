import { Modal, Form, Input, Button, Upload } from "antd";
import { InboxOutlined, UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import utils from "../../utils";

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const AddRoomModal = ({ isAddRoomModalOpen, setAddRoomModalOpen }) => {
  const [form] = Form.useForm();

  const [_roomName, setRoomName] = useState("");
  const [_roomType, setRoomType] = useState("");
  const [_roomPrice, setRoomPrice] = useState("");
  const [_roomDescription, setRoomDescription] = useState("");
  const [_fileImage, setFileImage] = useState(null);
  const [_imageUrl, setImageUrl] = useState("");

  const handleOk = (value) => {
    const data = {
      name: _roomName,
      type: _roomType,
      price: _roomPrice,
      description: _roomDescription,
      image: _imageUrl,
    };

    if (_fileImage == null) return;
    console.log(_fileImage);
    const imageRef = ref(storage, `images/${_fileImage.name + _fileImage.uid}`);
    uploadBytes(imageRef, _fileImage)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();
        console.log(url);
        setImageUrl(url);
      })
      .then(() => {
        console.log(data);
      });

    form.resetFields();
    setAddRoomModalOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setAddRoomModalOpen(false);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    console.log(e?.fileList[0]);
    setFileImage(e?.fileList[0]);
  };

  const uploadImage = () => {};

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <Modal
      title="Add New Room"
      open={isAddRoomModalOpen}
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
          label="Room name"
          name="name"
          rules={[{ required: true, message: "Please input the room name!" }]}
        >
          <Input
            value={_roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Room type"
          name="type"
          rules={[{ required: true, message: "Please input the room type!" }]}
        >
          <Input
            value={_roomType}
            onChange={(e) => setRoomType(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image"
          // valuePropName="fileList"
          // getValueFromEvent={normFile}
          // rules={[{ required: true, message: "Please upload room image" }]}
        >
          {/* <Upload listType="picture-card">
            {_fileImage ? null : uploadButton}
          </Upload> */}
          <input
            type={"file"}
            onChange={(e) => setFileImage(e.target.files[0])}
          ></input>
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

export default AddRoomModal;
