import React from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import styles from "./styles.module.scss";

const IntensityRadarChart = ({ data, subjects }) => {
  return (
    <ResponsiveContainer className={styles.container}>
      <RadarChart outerRadius={90} data={data}>
        <PolarGrid />
        <PolarAngleAxis axisLine={false} dataKey={"kind"} />
        <PolarRadiusAxis tick={false} angle={30} />
        <Radar
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default IntensityRadarChart;
