import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../API/Api";
import { USER_MAIN_DATA } from "../../../API/mocks/data";
import Navigation from "../../Components/Navigation";
import SideBar from "../../Components/SideBar";
import styles from "./styles.module.scss";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  const loadUser = async () => {
    const userId = await getUserById(Number(id));
    if (!userId) {
      return;
    }
    setUser(userId);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <Navigation />
      <SideBar />
      {user !== null && (
        <main className={styles.main}>
          <div>
            <h1 className={styles.user}>
              Bonjour{" "}
              <span className={styles.userName}>
                {user.userInfos.firstName}
              </span>
            </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            <section></section>
          </div>
        </main>
      )}
    </div>
  );
};

export default Dashboard;
