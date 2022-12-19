import React, { useEffect, useState } from "react";
import { getUserActivityById, getUserById } from "../../../API/Api";
import ScoreChart from "./ScoreChart";
import styles from "./styles.module.scss";

const Score = ({ userId }) => {
  const [userScore, setUserScore] = useState(null);

  const loadActivity = async () => {
    const userData = await getUserById(userId);
    if (!userData) {
      return;
    }
    console.log(userData);
    setUserScore(
      userData.score ? userData.score * 100 : userData.todayScore * 100
    );
  };

  useEffect(() => {
    loadActivity();
  });
  return (
    <section className={styles.userScore}>
      {userScore !== null && (
        <ScoreChart
          score={userScore}
          size={250}
          strokeWidth={15}
          color={"#FF0000"}
        />
      )}
    </section>
  );
};

export default Score;
