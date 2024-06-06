"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Senin",
    interaksi: 1000,
    energi: 1200,
    amt: 2400,
  },
  {
    name: "Selasa",
    interaksi: 3000,
    energi: 2398,
    amt: 2210,
  },
  {
    name: "Rabu",
    interaksi: 2000,
    energi: 1600,
    amt: 2290,
  },
  {
    name: "Kamis",
    interaksi: 2780,
    energi: 3908,
    amt: 2000,
  },
  {
    name: "Jum'at",
    interaksi: 1890,
    energi: 1800,
    amt: 2181,
  },
  {
    name: "Sabtu",
    interaksi: 2390,
    energi: 3800,
    amt: 2500,
  },
  {
    name: "Minggu",
    interaksi: 500,
    energi: 300,
    amt: 2100,
  },
];

export default function TraashLineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="energi"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="interaksi" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
