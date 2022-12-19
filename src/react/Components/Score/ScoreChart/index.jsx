import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.scss";

const ScoreChart = ({ score, size, strokeWidth, color }) => {
  console.log(score);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(score);
  }, [score]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;
  return (
    <div className={styles.container}>
      <svg width={"80%"} height={"80%"} viewBox={viewBox}>
        <circle
          fill="none"
          stroke="#FFFFFF"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          fill="none"
          stroke={color}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeDasharray={[dash, circumference - dash]}
          strokeLinecap="round"
        />
        <text
          fill="black"
          fontSize="40px"
          x="50%"
          y="50%"
          dy="20px"
          textAnchor="middle"
        >
          {`${score}%`}
        </text>
      </svg>
      <p className={styles.p}>de votre objectif</p>
    </div>
  );
};

export default ScoreChart;
