import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
import PieChartComponent from "../Components/PieChart";

const { Sider, Content } = Layout;

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/dsrishi/orders/orders")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const dryCleaningCount = data.filter(
    (item) => item.service === "Dry Cleaning"
  ).length;
  const washOnlyCount = data.filter(
    (item) => item.service === "Wash Only"
  ).length;

  const serviceData = [
    { type: "Dry Cleaning", value: dryCleaningCount },
    { type: "Wash Only", value: washOnlyCount },
  ];

  const activeCount = data.filter((item) => item.status === "Active").length;
  const completeCount = data.filter(
    (item) => item.status === "Completed"
  ).length;
  const statusData = [
    { type: "Active", value: activeCount },
    { type: "Completed", value: completeCount },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} theme="dark" collapsible>
        <Menu mode="inline" theme="dark">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/orders">Order</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "16px" }}>
          <div>
            <h1>Dashboard</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <PieChartComponent
                data={serviceData}
                className="piechart"
                title="Service Types"
                colors={["#1890ff", "#52c41a"]}
              />
              <PieChartComponent
                data={statusData}
                title="Service"
                colors={["#1890ff", "#52c41a"]}
              />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;