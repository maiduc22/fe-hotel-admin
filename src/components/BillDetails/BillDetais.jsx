import { Card, Col, Descriptions, Row, Tabs, Typography } from "antd";
import { useParams } from "react-router-dom";
const { Title, Text } = Typography;
import axios from "../../axios";
import { data } from "autoprefixer";
import { BASE_URL } from "../../consts";
import { useState } from "react";
import { useEffect } from "react";
import TabPane from "antd/es/tabs/TabPane";

const billData = {
  guestName: "Mai Duc",
  checkInDate: "",
  checkOutDate: "",
};
export const BillDetails = () => {
  const { bookingId } = useParams();

  const [billData, setBillData] = useState();

  async function getBillData() {
    try {
      const response = await axios.get(`${BASE_URL}/v1/bills/${bookingId}`);
      setBillData(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getBillData();
  }, []);

  return (
    <Card title="Bill Details" bordered={true}>
      <Row gutter={24}>
        <Col span={11}>
          <Descriptions title="Client Info" column={1}>
            <Descriptions.Item label="Fullname">
              {billData?.client.fullName}
            </Descriptions.Item>
            <Descriptions.Item label="ID Card">
              {billData?.client.idCard}
            </Descriptions.Item>
            <Descriptions.Item label="Phone Number">
              {billData?.client.tel}
            </Descriptions.Item>
            <Descriptions.Item label="Bank Name">
              {billData?.client.bankName}
            </Descriptions.Item>
            <Descriptions.Item label="Bank Number">
              {billData?.client.bankNumber}
            </Descriptions.Item>
          </Descriptions>

          <Descriptions title="Deposit and Payment" column={1}>
            <Descriptions.Item label="Employee Name">
              {billData?.employee}
            </Descriptions.Item>
            <Descriptions.Item label="Deposit">
              {billData?.deposit}
            </Descriptions.Item>
            <Descriptions.Item label="Need to Pay">
              {billData?.amount}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={11} offset={2}>
          <div>
            <Descriptions title="Rooms and Services Info" column={1} />
            <Tabs>
              {billData?.rooms.map((room, index) => (
                <TabPane tab={room.name} key={index}>
                  <Descriptions title="Room Info" column={2}>
                    <Descriptions.Item label="Price">
                      {room.price}
                    </Descriptions.Item>
                    <Descriptions.Item label="Saleoff">
                      {room.saleoff}
                    </Descriptions.Item>
                  </Descriptions>
                  <Descriptions title="Serivices Used" column={2}>
                    {room.services.map((service, index) => (
                      <>
                        <Descriptions.Item label="Service Name">
                          {service.name}
                        </Descriptions.Item>
                        <Descriptions.Item label="Quantity">
                          {service.quantity}
                        </Descriptions.Item>
                        <Descriptions.Item label="Price">
                          {service.price}
                        </Descriptions.Item>
                        <Descriptions.Item label="Saleoff">
                          {service.saleoff}
                        </Descriptions.Item>
                      </>
                    ))}
                  </Descriptions>
                </TabPane>
              ))}
            </Tabs>
          </div>
        </Col>
      </Row>
    </Card>
  );
};
