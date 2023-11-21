import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import "./../../Style/Dashboard.css";

const PieChartComponent = ({ data, title, colors }) => {
  return (
    <div className="piechart" style={{ width: "50%", marginRight: "15px" }}>
      <h2>{title}</h2>
      <hr />
      <ResponsiveContainer width="100%" height={330}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="type"
            outerRadius={140}
            fill="#8884d8"
          >
            {colors &&
              colors.map((color, index) => (
                <Cell key={`cell-${index}`} fill={color} />
              ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
