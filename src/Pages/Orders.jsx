import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderTableComponent from "../Components/OrderTableComponent";

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
    <div>
      <h1>Orders</h1>
      <OrderTableComponent orders={orders} />
    </div>
  );
};

export default Orders;
