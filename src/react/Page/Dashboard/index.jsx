import React, { useEffect, useState } from "react";
import MainData from "../../Components/MainData";
import Navigation from "../../Components/Navigation";
import SideBar from "../../Components/SideBar";
import styles from "./styles.module.scss";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <SideBar />
      <main className={styles.main}>
        <MainData />
      </main>
    </div>
  );
};

export default Dashboard;
