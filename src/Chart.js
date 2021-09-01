import React from "react";
import "./Chart.css";
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

function Chart() {
  const data = [
    {
      day: "Monday",
      user: 8000,
      revenue: 24000,
      amt: 2400,
    },
    {
      day: "Tuesday",
      user: 6000,
      revenue: 13980,
      amt: 2210,
    },
    {
      day: "Wednesday",
      user: 40000,
      revenue: 98000,
      amt: 2290,
    },
    {
      day: "Thursday",
      user: 10780,
      revenue: 39080,
      amt: 2000,
    },
    {
      day: "Friday",
      user: 189000,
      revenue: 48000,
      amt: 2181,
    },
    {
      day: "Saturday",
      user: 2390,
      revenue: 38000,
      amt: 2500,
    },
    {
      day: "Sunday",
      user: 3490,
      revenue: 43000,
      amt: 2100,
    },
  ];
  return (
    <div className="Chart">
      <div className="container">
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <br />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="user" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
