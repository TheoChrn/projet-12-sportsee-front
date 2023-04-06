import React from "react";
import { ReactComponent as MeditationIcone } from "../../../assets/icon-meditation.svg";
import { ReactComponent as NatationIcone } from "../../../assets/icon-natation.svg";
import { ReactComponent as CyclisteIcone } from "../../../assets/icon-cycliste.svg";
import { ReactComponent as HaltereIcone } from "../../../assets/icon-haltere.svg";
import styles from "./styles.module.scss";

/**
 * Create ReactComponant for pictures
 * @param {number} width the width of the picture
 * @param {number} height the height of the picture
 * @returns {arrayOf(ReactComponent)}
 */
const icons = [
  <MeditationIcone width={"36px"} height={"36px"} />,
  <NatationIcone width={"36px"} height={"36px"} />,
  <CyclisteIcone width={"36px"} height={"36px"} />,
  <HaltereIcone width={"36px"} height={"36px"} />,
];

/**
 * Render the side bar on the dashboard
 * @returns {HTMLElement} for the side navigation bar
 */

const SideBar = () => {
  return (
    <nav className={styles.sideBar}>
      <ul className={styles.sideBarItems}>
        {icons.map((icon, index) => {
          return (
            <li key={index} className={styles.sideBarItem}>
              <button>{icon}</button>
            </li>
          );
        })}
        <p className={styles.sideBarCopyright}>Copyright, SportSee 2020</p>
      </ul>
    </nav>
  );
};

export default SideBar;
