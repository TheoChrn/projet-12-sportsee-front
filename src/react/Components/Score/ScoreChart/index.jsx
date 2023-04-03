import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

/**
 * Renders the score chart
 * @param {number} score
 * @param {number} size
 * @param {number} strokeWidth
 * @param {string} color
 * @returns {JSX.Element}
 */
const ScoreChart = ({ score, size, strokeWidth, color }) => {
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
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          fill="#FFF"
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
          y="45%"
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

ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
