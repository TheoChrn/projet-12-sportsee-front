import React, { useContext, useEffect, useState } from "react";
import { getUserById } from "../../../API/Api";
import ScoreChart from "./ScoreChart";
import styles from "./styles.module.scss";
import { UserContext } from "../../Context/UserContext";

const Score = () => {
  const { userData, loading, hasError } = useContext(UserContext);

  if (loading || hasError) {
    return <></>;
  }

  return (
    <section className={styles.userScore}>
      <h2 className={styles.score}>Score</h2>
      {userData !== null && (
        <ScoreChart
          score={
            userData.user.todayScore
              ? userData.user.todayScore * 100
              : userData.user.score * 100
          }
          size={250}
          strokeWidth={15}
          color={"#FF0000"}
        />
      )}
    </section>
  );
};

export default Score;
