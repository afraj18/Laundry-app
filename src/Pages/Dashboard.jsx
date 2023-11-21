import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "antd";

import PieChartComponent from "../Components/DashBoardComponents/PieChart";
import SideBar from "../Components/SideBar";
import OrderStats from "../Components/DashBoardComponents/OrderStats";
import HeaderComponent from "../Components/HeaderComponent";

const { Content } = Layout;

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
      <SideBar />
      <Layout className="site-layout">
        <HeaderComponent />
        <Content style={{ margin: "16px" }}>
          <div>
            <OrderStats
              dryCleaningCount={dryCleaningCount}
              washOnlyCount={washOnlyCount}
              activeCount={activeCount}
              completeCount={completeCount}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <PieChartComponent
                data={serviceData}
                className="piechart"
                title="Service Types"
                colors={["#37a2ec", "#44bc84"]}
              />
              <PieChartComponent
                data={statusData}
                title="Service"
                colors={["#37a2ec", "#44bc84"]}
              />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
