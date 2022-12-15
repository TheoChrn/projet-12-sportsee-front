import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import styles from "./styles.module.scss";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <ul className={styles.navItems}>
          <NavLink to="/" className={styles.navItem}>
            Accueil
          </NavLink>
          <NavLink to="/" className={styles.navItem}>
            Profil
          </NavLink>
          <NavLink to="/" className={styles.navItem}>
            Réglage
          </NavLink>
          <NavLink to="/" className={styles.navItem}>
            Communauté
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
