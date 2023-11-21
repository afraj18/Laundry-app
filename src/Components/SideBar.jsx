import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import { ShopOutlined, UserOutlined } from "@ant-design/icons";
import { Divider } from "antd";
const { Sider } = Layout;

function SideBar() {
  return (
    <Sider width={200} theme="dark" collapsible>
      <Menu mode="inline" theme="dark">
        <Menu.Item key="1">
          <Link to="/">
            <h3>LAUNDROCARE</h3>
          </Link>
        </Menu.Item>
        <Divider style={{ backgroundColor: "white" }} />
        <Menu.Item key="2" icon={<ShopOutlined />}>
          <Link to="/orders">Order</Link>
        </Menu.Item>
        <h3 className="sideBar-SubHeading">Setting</h3>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="">Users</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideBar;
