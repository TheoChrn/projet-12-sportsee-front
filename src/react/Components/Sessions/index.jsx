import React from "react";
import { useContext, useEffect, useState } from "react";
import { getUserAverageSession } from "../../../API/Api";
import AverageSessionsChart from "./SessionsLineChart";
import { UserContext } from "../../Context/UserContext";
import styles from "./styles.module.scss";

const AverageSessions = () => {
  const { userData, loading, hasError } = useContext(UserContext);

  if (loading || hasError) {
    return <></>;
  }

  const userAverageSessions = userData.sessions.sessions;
  return (
    <section className={styles.userSessions}>
      {userAverageSessions !== null && (
        <AverageSessionsChart sessions={userAverageSessions} />
      )}
    </section>
  );
};

export default AverageSessions;
