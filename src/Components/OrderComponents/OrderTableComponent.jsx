import React, { useState } from "react";
import { Table, Tag, Select, Button, Checkbox, Row, Col, message } from "antd";

const { Option } = Select;

const OrderTableComponent = ({ orders }) => {
  const [branchFilter, setBranchFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);

  const handleBranchFilterChange = (value) => {
    setBranchFilter(value);
  };

  const handleServiceFilterChange = (value) => {
    setServiceFilter(value);
  };

  const markAsRead = () => {
    let count = 0;
    orders.forEach((order) => {
      if (order.status === "Active" && selectedOrders.includes(order.id)) {
        order.status = "Delivered";
        count++;
      }
    });

    if (count > 0) {
      message.success({
        content: `${count} order(s) marked as complete`,
      });
    }

    setSelectedOrders([]);
    setCompletedCount((prevCount) => prevCount + count);
  };

  const toggleOrderSelection = (orderId) => {
    setSelectedOrders((prevSelected) => {
      if (prevSelected.includes(orderId)) {
        return prevSelected.filter((id) => id !== orderId);
      } else {
        return [...prevSelected, orderId];
      }
    });
  };

  const columns = [
    {
      title: "Select",
      dataIndex: "select",
      key: "select",
      render: (_, record) => (
        <Checkbox
          onChange={() => toggleOrderSelection(record.id)}
          checked={selectedOrders.includes(record.id)}
        />
      ),
    },
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
      title: "Added by",
      dataIndex: "addedby",
      key: "addedby",
    },
    {
      title: "Reference",
      dataIndex: "reference",
      key: "reference",
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
        <Tag color="green">{status === "Active" ? "Active" : "Delivered"}</Tag>
      ),
    },
  ];

  const filteredOrders = orders.filter(
    (order) =>
      (branchFilter === "All" || order.branch === branchFilter) &&
      (serviceFilter === "All" || order.service === serviceFilter)
  );

  return (
    <div>
      <div style={{ margin: "10px" }}>
        <Row>
          <Col span={4}>
            <h4>Filter by Branch</h4>
          </Col>
          <Col span={4}>
            <h4>Filter by Service</h4>
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={4}>
            <Select
              style={{ width: 120 }}
              value={branchFilter}
              onChange={handleBranchFilterChange}
            >
              <Option value="All">All</Option>
              <Option value="Colombo">Colombo</Option>
              <Option value="Kandy">Kandy</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select
              style={{ width: 120 }}
              value={serviceFilter}
              onChange={handleServiceFilterChange}
            >
              <Option value="All">All</Option>
              <Option value="Dry Cleaning">Dry Cleaning</Option>
              <Option value="Wash Only">Wash Only</Option>
            </Select>
          </Col>
          <Col span={4}></Col>
          <Col span={6}></Col>
          <Col
            span={4}
            style={{ justifyContent: "right", alignItems: "right" }}
          >
            <Button
              type="primary"
              onClick={markAsRead}
              style={{
                display: "flex",
                width: "150%",
                justifyContent: "center",
                backgroundColor: "#3b4b64",
                textAlign: "center",
              }}
            >
              Mark as Complete <span>({completedCount})</span>
            </Button>
          </Col>
        </Row>
      </div>
      <Table dataSource={filteredOrders} columns={columns} />
    </div>
  );
};

export default OrderTableComponent;
