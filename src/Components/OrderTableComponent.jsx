import React, { useState } from "react";
import { Table, Tag, Select, Button } from "antd";

const { Option } = Select;

const OrderTableComponent = ({ orders }) => {
  const [branchFilter, setBranchFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");

  const handleBranchFilterChange = (value) => {
    setBranchFilter(value);
  };

  const handleServiceFilterChange = (value) => {
    setServiceFilter(value);
  };

  const markAsRead = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "Read" } : order
    );
  };

  const filteredOrders = orders.filter(
    (order) =>
      (branchFilter === "All" || order.branch === branchFilter) &&
      (serviceFilter === "All" || order.service === serviceFilter)
  );

  const columns = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
      render: (customer) => (
        <span>
          {customer.name} - {customer.city}
        </span>
      ),
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "blue"}>{status}</Tag>
      ),
    },
    {
      title: "Reference",
      dataIndex: "reference",
      key: "reference",
    },
    {
      title: "Added by",
      dataIndex: "addedby",
      key: "addedby",
    },
  ];

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "space-between", padding: 8 }}
      >
        <div>
          <h4>Filter by Branch</h4>
          <Select
            style={{ width: 120 }}
            value={branchFilter}
            onChange={handleBranchFilterChange}
          >
            <Option value="All">All</Option>
            <Option value="Colombo">Colombo</Option>
            <Option value="Kandy">Kandy</Option>
          </Select>
        </div>
        <div>
          <h4>Filter by Service</h4>
          <Select
            style={{ width: 120 }}
            value={serviceFilter}
            onChange={handleServiceFilterChange}
          >
            <Option value="All">All</Option>
            <Option value="Dry Cleaning">Dry Cleaning</Option>
            <Option value="Wash Only">Wash Only</Option>
          </Select>
        </div>
        <div>
          <Button type="primary" onClick={() => markAsRead(1)}>
            Mark as Compelete <span>(0)</span>
          </Button>
        </div>
      </div>
      <Table dataSource={filteredOrders} columns={columns} />
    </div>
  );
};

export default OrderTableComponent;
