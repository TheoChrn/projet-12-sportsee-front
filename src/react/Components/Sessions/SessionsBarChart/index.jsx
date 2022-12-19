import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./styles.module.scss";

const AverageSessionsChart = ({ sessions }) => {
  return (
    <ResponsiveContainer className={styles.container}>
      <LineChart data={sessions}>
        <XAxis
          axisLine={false}
          tick={{ fill: "#FFFFFF" }}
          padding={{ top: 15, right: 15, bottom: 15, left: 15 }}
          dataKey="day"
          tickLine={false}
        />
        <YAxis hide={true} fill="#FFFFFF" tickLine={false} />
        <Legend />
        <Tooltip />
        <Line
          stroke="#FFF"
          strokeWidth={2}
          type="natural"
          dot={false}
          dataKey="sessionLength"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageSessionsChart;
