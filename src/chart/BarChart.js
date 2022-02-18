import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { chartData } from "./chartApi/chartData";

const BarChartExample = () => {
  const [data, setData] = useState(chartData);
  return (
    <>
      <h3>Bar Chart</h3>
      <BarChart
        width={1000}
        height={600}
        data={data}
        margin={{
          top: 40,
          right: 40,
          left: 40,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#7ac4c0" />
        <Bar dataKey="uv" fill="#8884d8" />
        <Bar dataKey="amt" fill="#8f129c" />
      </BarChart>
    </>
  );
};

export default BarChartExample;
