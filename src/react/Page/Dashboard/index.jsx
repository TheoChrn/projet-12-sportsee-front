import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../API/Api";
import Activity from "../../Components/Activity";
import Navigation from "../../Components/Navigation";
import SideBar from "../../Components/SideBar";
import styles from "./styles.module.scss";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  const loadUser = async () => {
    const userData = await getUserById(Number(id));
    if (!userData) {
      return;
    }
    setUser(userData);
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
            <section className={styles.userInformations}>
              <Activity userId={user.id}/>
            </section>
          </div>
        </main>
      )}
    </div>
  );
};

export default Dashboard;
