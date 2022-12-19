import React, { useEffect, useState } from "react";
import { getUserActivityById } from "../../../API/Api";
import ActivityBarChart from "./ActivityBarChart";
import styles from "./styles.module.scss";

const Activity = ({ userId }) => {
  const [userActivity, setUserActivity] = useState(null);

  const loadActivity = async () => {
    const userData = await getUserActivityById(userId);
    if (!userData) {
      return;
    }
    setUserActivity(userData.sessions);
  };

  useEffect(() => {
    loadActivity();
  });
  return (
    <section className={styles.userActivity}>
      <h1 className={styles.dailyActivity}>Activité quotidienne</h1>
      {userActivity !== null && (
        <ActivityBarChart sessions={userActivity}/>
      )}
    </section>
  );
};

export default Activity;
