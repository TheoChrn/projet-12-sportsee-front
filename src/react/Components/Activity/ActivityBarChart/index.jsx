import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import styles from "./styles.module.scss";
const ActivityBarChart = ({ sessions }) => {
  return (
    <ResponsiveContainer height={145} className={styles.container}>
      <BarChart
        data={sessions}
        barGap={0}
        barCategoryGap={0}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
      >
        <Tooltip radius={[10, 0, 0, 10]} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType={"circle"}
          wrapperStyle={{
            top: -80,
          }}
        />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          maxBarSize={7}
          unit={"kg"}
          name={"Poids (kg)"}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          maxBarSize={7}
          unit={"kCal"}
          name={"Calories brûlées (kCal)"}
          yAxisId={1}
          radius={[3, 3, 0, 0]}
        />
        <CartesianGrid
          vertical={false}
          strokeDasharray="3 3"
          horizontalPoints={["50%", "0%"]}
        />
        <XAxis
          dataKey={""}
          tickLine={false}
          tick={{ transform: "translate(0,20)" }}
        />
        <YAxis
          tickCount={3}
          orientation={"right"}
          dataKey={"kilogram"}
          tickLine={false}
          axisLine={false}
          tick={{ transform: "translate(20,0)" }}
        />
        <YAxis
          hide={true}
          yAxisId={1}
          orientation={"left"}
          dataKey={"calories"}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityBarChart;
