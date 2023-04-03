import React, { useContext, useEffect, useState } from "react";
import { getUserById } from "../../../API/Api";
import Intake from "./Intake";
import { UserContext } from "../../Context/UserContext";
import styles from "./styles.module.scss";

const DailyIntake = () => {
  const { userData, loading, hasError } = useContext(UserContext);

  if (loading || hasError) {
    return <></>;
  }

  const userIntake = userData.user.keyData;
  return (
    <section className={styles.userIntake}>
      {userIntake !== null && <Intake keyData={userIntake} size={30} />}
    </section>
  );
};

export default DailyIntake;
