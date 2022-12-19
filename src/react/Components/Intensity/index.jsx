import React, { useEffect, useState } from "react";
import { getUserPerformance } from "../../../API/Api";
import IntensityRadarChart from "./IntensityRadarChart";

import styles from "./styles.module.scss";

const Intensity = ({ userId }) => {
  const [userIntensity, setUserIntensity] = useState(null);
  const [userSubjects, setUserSubjects] = useState(null);

  const loadActivity = async () => {
    const userData = await getUserPerformance(userId);
    if (!userData) {
      return;
    }
    setUserIntensity(userData.data);
    setUserSubjects(userData.kind);
  };

  useEffect(() => {
    loadActivity();
  });
  return (
    <section className={styles.userIntensity}>
      {userIntensity && userSubjects !== null && (
        <IntensityRadarChart data={userIntensity} subjects={userSubjects} />
      )}
    </section>
  );
};

export default Intensity;
