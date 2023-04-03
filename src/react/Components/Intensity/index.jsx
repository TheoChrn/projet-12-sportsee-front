import React, { useContext, useEffect, useState } from "react";
import { getUserPerformance } from "../../../API/Api";
import IntensityRadarChart from "./IntensityRadarChart";
import { UserContext } from "../../Context/UserContext";
import styles from "./styles.module.scss";

const Intensity = () => {
  const { userData, loading, hasError } = useContext(UserContext);

  if (loading || hasError) {
    return <></>;
  }

  const userIntensity = userData.performance.data;
  return (
    <section className={styles.userIntensity}>
      {userIntensity !== null && <IntensityRadarChart data={userIntensity} />}
    </section>
  );
};

export default Intensity;
