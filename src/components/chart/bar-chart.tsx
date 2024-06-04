"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Senin",
    uv: 4000,
    kg: 2400,
    amt: 2400,
  },
  {
    name: "Selasa",
    uv: 3000,
    kg: 1398,
    amt: 2210,
  },
  {
    name: "Rabu",
    uv: 2000,
    kg: 9800,
    amt: 2290,
  },
  {
    name: "Kamis",
    uv: 2780,
    kg: 3908,
    amt: 2000,
  },
  {
    name: "Jumat",
    uv: 1890,
    kg: 4800,
    amt: 2181,
  },
  {
    name: "Sabtu",
    uv: 2390,
    kg: 3800,
    amt: 2500,
  },
  {
    name: "Minggu",
    uv: 3490,
    kg: 4300,
    amt: 2100,
  },
];

const CustomBarChart = ({}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={280} height={100} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="kg"
          fill="#8884d8"
          label="KG"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
