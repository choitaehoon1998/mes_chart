
import React, { useCallback, useState } from "react";
import "./pie.css"
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "그룹 A", value: 600 },
  { name: "그룹 B", value: 500 },
  { name: "그룹 C", value: 400 },
  { name: "그룹 D", value: 300 },
  { name: "그룹 E", value: 240 }
];

const COLORS = ["rgb(8 81 156)", "rgb(64 121 178)", "rgb(33 113 181)", "rgb(107 174 214)", "rgb(158 202 225)"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
    
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Piechart() {
  return (
    <div className="d">
        <label className="l">Pie Chart</label>
    <PieChart width={500} height={500}>
      <Pie
        dataKey="value"
        data={data}
        cx={250}
        cy={250}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={200}
        fill="#8884d8"
        startAngle={90}
        endAngle={450}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip/>
    </PieChart>
    </div>
  );
}
