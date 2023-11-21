import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderTableComponent from "../Components/OrderComponents/OrderTableComponent";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import HeaderComponent from "../Components/HeaderComponent";
const { Content } = Layout;

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/dsrishi/orders/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout className="site-layout">
        <HeaderComponent />
        <Content style={{ margin: "16px" }}>
          <OrderTableComponent orders={orders} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Orders;
