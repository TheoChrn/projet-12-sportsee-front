import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const ActivityBarChart = ({ sessions }) => {
  return (
    <ResponsiveContainer className={styles.container} width="100%">
      <BarChart
        data={sessions}
        margin={{ top: 20, right: 15, bottom: 20, left: 15 }}
        barGap="6%"
      >
        <Tooltip
          wrapperStyle={{ outline: "none" }}
          content={({ active, payload }) => {
            if (active && payload) {
              return (
                <div className={styles.customTooltip}>
                  <ul>
                    {payload.map((data, index) => (
                      <li key={index}>
                        {data.value}
                        {data.unit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
          }}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType={"circle"}
          formatter={(value, index) => {
            return (
              <span key={index} className={styles.legendColor}>
                {value}
              </span>
            );
          }}
          wrapperStyle={{
            top: -80,
          }}
        />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          unit={"kg"}
          name={"Poids (kg)"}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          unit={"kCal"}
          name={"Calories brûlées (kCal)"}
          yAxisId={1}
          radius={[3, 3, 0, 0]}
        />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          padding={{ left: 12, right: 12 }}
          tickLine={false}
          tick={{ transform: "translate(0,20)" }}
          tickFormatter={(value) => value + 1}
          scale={"point"}
        />
        <YAxis
          tickCount={3}
          orientation={"right"}
          dataKey={"kilogram"}
          tickLine={false}
          axisLine={false}
          tick={{ transform: "translate(20,0)" }}
          domain={[(dataMax) => dataMax - 1, "dataMax"]}
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

ActivityBarChart.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
