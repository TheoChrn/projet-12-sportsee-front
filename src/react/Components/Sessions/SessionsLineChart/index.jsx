import React, { useState } from "react";
import {
  Area,
  Label,
  Legend,
  Line,
  LineChart,
  Rectangle,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const AverageSessionsChart = ({ sessions }) => {
  const customXTicks = [
    { value: 1, label: "L" },
    { value: 2, label: "M" },
    { value: 3, label: "M" },
    { value: 4, label: "J" },
    { value: 5, label: "V" },
    { value: 6, label: "S" },
    { value: 7, label: "D" },
  ];

  /**
   * 
   * @param {*} props 
   * @returns {SVGRect} that take all the width from the cursor to the right with an 0.5 opacity
   */
  const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x } = points[0];

    return (
      <Rectangle
        fill="rgba(0,0,0,0.3)"
        stroke="none"
        x={x}
        y={0}
        width={width}
        height={height}
      />
    );
  };

  return (
    <ResponsiveContainer className={styles.container}>
      <LineChart
        data={sessions}
        margin={{ top: 20, right: 20, left: 20, bottom: 60 }}
      >
        <Legend
          verticalAlign="top"
          align="left"
          content={() => {
            return (
              <h2 className={styles.sessionTitle}>
                Durée moyenne des sessions
              </h2>
            );
          }}
        />
        <XAxis
          axisLine={false}
          dy={45}
          dataKey="day"
          tickLine={false}
          ticks={customXTicks.map((tick) => tick.value)}
          tick={(props) => {
            const { x, y, payload } = props;
            const tick = customXTicks.find((t) => t.value === payload.value);

            return (
              <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={60} textAnchor="middle" fill="#fff">
                  {tick ? tick.label : ""}
                </text>
              </g>
            );
          }}
        />
        <YAxis hide={true} fill="#FFFFFF" tickLine={false} />
        <Tooltip
          cursor={<CustomCursor width={500} height={500} />}
          offset={0}
          allowEscapeViewBox={{ x: true, y: false }}
          wrapperStyle={{
            outline: "none",
          }}
          content={({ active, payload }) => {
            if (active && payload) {
              return (
                <div className={styles.customTooltip}>
                  <ul>
                    {payload.map((data, index) => (
                      <li key={index}>{data.value} min</li>
                    ))}
                  </ul>
                </div>
              );
            }
          }}
        />
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

AverageSessionsChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ),
};
