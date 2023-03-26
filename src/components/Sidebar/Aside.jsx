import React from "react";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { filter, map } from "lodash";
import { routes } from "../../router";

export default function Aside({
  collapsed,
  rtl,
  toggled,
  handleToggleSidebar,
  handleGetTitle,
}) {
  const renderSideBarContent = map(routes, (route) => {
    if (route.childred) {
      return (
        <Menu className="custome-menu" iconShape="circle">
          <SubMenu title={route.title} icon={route.icon()}>
            {map(route.children, (child) => (
              <MenuItem onClick={() => handleGetTitle(child.title)}>
                <Link to={child.path}>{child.title}</Link>
              </MenuItem>
            ))}
          </SubMenu>
        </Menu>
      );
    }
    return (
      <Menu className="custom-menu" iconShape="circle">
        <MenuItem
          onClick={() => handleGetTitle(route.title)}
          icon={route.icon()}
        >
          <Link to={route.path}>{route.title}</Link>
        </MenuItem>
      </Menu>
    );
  });
  return (
    <ProSidebar>
      <SidebarHeader
        rtl={rtl}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 10,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Cryptocurrency Trading Admin
        </div>
      </SidebarHeader>

      <SidebarContent>{renderSideBarContent}</SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <span> viewSource</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}
