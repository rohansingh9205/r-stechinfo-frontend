"use client";

import styles from "./app-header.module.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

export default function AppHeader() {
  return (
    <header className={styles.header}>

      <div>

        <h2 className={styles.title}>
          Khushi Hind
        </h2>

        <p className={styles.subtitle}>
          Human Resource Management System
        </p>

      </div>

      <div className={styles.rightSide}>

        <button className={styles.notification}>
          <FaBell />
        </button>

        <div className={styles.profile}>

          <FaUserCircle className={styles.profileIcon} />

          <div>

            <h4>Super Admin</h4>

            <p>R&S Tech Info</p>

          </div>

        </div>

      </div>

    </header>
  );
}