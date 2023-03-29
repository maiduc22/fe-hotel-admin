import * as React from "react";
import { Menu, Layout } from "antd";
const { Sider } = Layout;
import { Link } from "react-router-dom";

export default class SliderBar extends React.Component {
  render() {
    return (
      <Sider
        style={{
          overflow: "auto",
          height: "100%",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo text-white text-lg font-extrabold h-12 flex items-center justify-center w-full">
          {" "}
          Hotel Management
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="mt-2 font-bold"
        >
          <Menu.Item key="1">
            <Link to={"/"}>Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            {" "}
            <Link to={"/room-management"}>Rooms management</Link>
          </Menu.Item>
          <Menu.Item key="3">
            {" "}
            <Link to={"/booking-management"}>Bookings management</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
