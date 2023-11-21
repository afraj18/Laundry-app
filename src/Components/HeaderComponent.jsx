import React from "react";
import { Col, Row } from "antd";
import { Layout } from "antd";
import { MenuOutlined, MailOutlined, BellOutlined } from "@ant-design/icons";

const { Header } = Layout;

function HeaderComponent() {
  return (
    <Header className="header">
      <Row>
        <Col span={18}>
          <MenuOutlined />
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <BellOutlined style={{ marginLeft: "10px" }} />
          <MailOutlined style={{ marginLeft: "10px" }} />
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderComponent;
