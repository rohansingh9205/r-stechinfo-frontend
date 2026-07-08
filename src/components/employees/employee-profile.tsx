"use client";

import styles from "./employee-profile.module.css";

export default function EmployeeProfile() {
  return (
    <div className={styles.container}>

      <h2>Employee Profile</h2>

      <div className={styles.profile}>

        <img
          src="/logo.png"
          alt="Employee"
          className={styles.image}
        />

        <div>

          <h3>Rohan Singh</h3>

          <p>Employee ID : EMP001</p>

          <p>Department : IT</p>

          <p>Designation : Frontend Developer</p>

          <p>Company : Khushi Hind</p>

          <p>Status : Active</p>

        </div>

      </div>

    </div>
  );
}