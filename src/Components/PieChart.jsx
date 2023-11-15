import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import "./../Pages/Dashboard.css";

const PieChartComponent = ({ data, title, colors }) => {
  return (
    <div className="piechart" style={{ width: "100%" }}>
      <h2>{title}</h2>
      <hr />
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="type"
            outerRadius={80}
            fill="#8884d8"
            label
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
