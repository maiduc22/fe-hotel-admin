import * as React from "react";
import { Layout } from "antd";
const { Header } = Layout;

const NavHeader = ({ title }) => {
  return (
    <Header className="site-layout-background h-12" style={{ padding: 0 }} />
  );
};
export default NavHeader;
