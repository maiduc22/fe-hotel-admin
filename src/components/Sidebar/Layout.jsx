import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { Layout } from "antd";
import Aside from "./Aside";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import RoomManagementPage from "../../pages/RoomManagementPage/RoomManagementPage";

export default function Layout1() {
  const history = useHistory();

  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [titleHeader, setTitleHeader] = useState("");

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div>
      <Router>
        <Aside
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleGetTitle={setTitleHeader}
        />
        <Layout>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/room-management">
              <RoomManagementPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
