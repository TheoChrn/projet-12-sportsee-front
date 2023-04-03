import React, { useContext, useEffect, useState } from "react";
import { getUserActivityById } from "../../../API/Api";
import ActivityBarChart from "./ActivityBarChart";
import styles from "./styles.module.scss";
import { UserContext } from "../../Context/UserContext";

const Activity = () => {
  const { userData, loading } = useContext(UserContext);

  if (loading) {
    return <></>;
  }

  const userActivity = userData.activity;
  return (
    <section className={styles.userActivity}>
      <h1 className={styles.dailyActivity}>Activité quotidienne</h1>
      {userActivity !== null && (
        <ActivityBarChart sessions={userActivity.sessions} />
      )}
    </section>
  );
};

export default Activity;
