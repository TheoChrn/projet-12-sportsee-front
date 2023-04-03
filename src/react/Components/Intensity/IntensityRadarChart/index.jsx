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
import PropTypes from "prop-types";

const IntensityRadarChart = ({ data }) => {
  const names = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];
  return (
    <ResponsiveContainer className={styles.container}>
      <RadarChart data={data} outerRadius={"60%"}>
        <PolarGrid stroke="#FFF" radialLines={false} />
        <PolarAngleAxis
          stroke="#FFF"
          tickLine={false}
          dy={4}
          tickFormatter={(value) => names[value]}
          tick={{
            fontSize: "12px",
            fontWeight: "500",
          }}
        />
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

IntensityRadarChart.propTypes = {
  kind: PropTypes.objectOf(PropTypes.number),
  value: PropTypes.objectOf(PropTypes.number),
};
