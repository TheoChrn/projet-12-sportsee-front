import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getUserAverageSession } from "../../../API/Api";
import AverageSessionsChart from "./SessionsLineChart";
import styles from "./styles.module.scss";

const AverageSessions = ({ userId }) => {
  const [userAverageSessions, setUserAverageSessions] = useState(null);

  const loadSessions = async () => {
    const userData = await getUserAverageSession(userId);
    if (!userData) {
      return;
    }
    setUserAverageSessions(userData.sessions);
  };

  useEffect(() => {
    loadSessions();
  });
  return (
    <section className={styles.userSessions}>
      {userAverageSessions !== null && (
        <AverageSessionsChart sessions={userAverageSessions} />
      )}
    </section>
  );
};

export default AverageSessions;
