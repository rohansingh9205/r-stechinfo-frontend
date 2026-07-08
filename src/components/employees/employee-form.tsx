"use client";

import styles from "./employee-form.module.css";

export default function EmployeeForm() {
  return (
    <div className={styles.container}>

      <h2>Add Employee</h2>

      <div className={styles.grid}>

        <div className={styles.group}>
          <label>Employee ID</label>
          <input type="text" placeholder="EMP001" />
        </div>

        <div className={styles.group}>
          <label>Employee Name</label>
          <input type="text" placeholder="Employee Name" />
        </div>

        <div className={styles.group}>
          <label>Company</label>
          <input type="text" placeholder="Company" />
        </div>

        <div className={styles.group}>
          <label>Department</label>
          <input type="text" placeholder="Department" />
        </div>

        <div className={styles.group}>
          <label>Designation</label>
          <input type="text" placeholder="Designation" />
        </div>

        <div className={styles.group}>
          <label>Joining Date</label>
          <input type="date" />
        </div>

        <div className={styles.group}>
          <label>Phone</label>
          <input type="text" placeholder="Phone Number" />
        </div>

        <div className={styles.group}>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>

      </div>

      <div className={styles.buttons}>
        <button>Cancel</button>
        <button>Save Employee</button>
      </div>

    </div>
  );
}