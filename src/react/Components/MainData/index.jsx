import React from "react";
import Activity from "../../Components/Activity";
import DailyIntake from "../../Components/DailyIntake";
import Intensity from "../../Components/Intensity";
import Score from "../../Components/Score";
import AverageSessions from "../../Components/Sessions";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
import styles from "./styles.module.scss";

const MainData = () => {
  const { userData, loading, hasError } = useContext(UserContext);

  if (loading || hasError) {
    return <div>Aucune données à afficher</div>;
  }

  const user = userData.user;
  return (
    <div className={styles.container}>
      {user !== null && (
        <section>
          <h1 className={styles.user}>
            Bonjour{" "}
            <span className={styles.userName}>{user.userInfos.firstName}</span>
          </h1>
          <h2 className={styles.congrats}>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
          <section className={styles.userInformations}>
            <Activity />
            <AverageSessions />
            <Intensity />
            <Score />
            <DailyIntake />
          </section>
        </section>
      )}
    </div>
  );
};

export default MainData;
