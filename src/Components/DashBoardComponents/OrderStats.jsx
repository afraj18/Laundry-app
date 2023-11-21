import React from "react";
import { Statistic, Row, Col } from "antd";
import {
  DeliveredProcedureOutlined,
  TagOutlined,
  StarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
function OrderStats({
  dryCleaningCount,
  washOnlyCount,
  activeCount,
  completeCount,
}) {
  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <div className="StatsBox">
          <Statistic
            title="Dry Cleaning Count"
            value={dryCleaningCount}
            prefix={
              <TagOutlined
                style={{
                  background: "#3c22cf",
                  padding: "4px",
                  color: "white",
                }}
              />
            }
          />
        </div>
      </Col>
      <Col span={6}>
        <div className="StatsBox">
          <Statistic
            title="Wash Only Count"
            value={washOnlyCount}
            prefix={
              <StarOutlined
                style={{
                  background: "#3e96f1",
                  padding: "4px",
                  color: "white",
                }}
              />
            }
          />
        </div>
      </Col>
      <Col span={6}>
        <div className="StatsBox">
          <Statistic
            title="Active"
            value={activeCount}
            prefix={
              <SettingOutlined
                style={{
                  background: "#f9ac14",
                  padding: "4px",
                  color: "white",
                }}
              />
            }
          />
        </div>
      </Col>
      <Col span={6}>
        <div className="StatsBox">
          <Statistic
            title="Delivered"
            value={completeCount}
            prefix={
              <DeliveredProcedureOutlined
                style={{
                  background: "#e55353",
                  padding: "4px",
                  color: "white",
                }}
              />
            }
          />
        </div>
      </Col>
    </Row>
  );
}

export default OrderStats;
