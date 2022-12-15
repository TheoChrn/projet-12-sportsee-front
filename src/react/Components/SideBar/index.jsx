import React from "react";
import { ReactComponent as MeditationIcone } from "../../../assets/icon-meditation.svg";
import { ReactComponent as NatationIcone } from "../../../assets/icon-natation.svg";
import { ReactComponent as CyclisteIcone } from "../../../assets/icon-cycliste.svg";
import { ReactComponent as HaltereIcone } from "../../../assets/icon-haltere.svg";
import styles from "./styles.module.scss";

const icons = [
  <MeditationIcone width={"36px"} height={"36px"} />,
  <NatationIcone width={"36px"} height={"36px"} />,
  <CyclisteIcone width={"36px"} height={"36px"} />,
  <HaltereIcone width={"36px"} height={"36px"} />,
];

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <ul className={styles.sideBarItems}>
        {icons.map((icon) => {
          return (
            <li className={styles.sideBarItem}>
              <button>{icon}</button>
            </li>
          );
        })}
        <p className={styles.sideBarCopyright}>Copiryght, SportSee 2020</p>
      </ul>
    </div>
  );
};

export default SideBar;
