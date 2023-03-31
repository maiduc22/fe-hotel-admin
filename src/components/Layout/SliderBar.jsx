import * as React from "react";
import { Menu, Layout } from "antd";
const { Sider } = Layout;
import { Link, useLocation } from "react-router-dom";

export default function SliderBar() {
  const location = useLocation();
  const path = location.pathname;

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
        defaultSelectedKeys={[path !== "/" ? path : "/room-management"]}
        className="mt-2 font-bold"
      >
        <Menu.Item key="/room-management">
          {" "}
          <Link to={"/room-management"}>Rooms management</Link>
        </Menu.Item>
        <Menu.Item key="/booking-management">
          {" "}
          <Link to={"/booking-management"}>Bookings management</Link>
        </Menu.Item>
        <Menu.Item key="/service-management">
          {" "}
          <Link to={"/service-management"}>Service management</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
