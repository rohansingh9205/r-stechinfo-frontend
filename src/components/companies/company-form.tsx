"use client";

import styles from "./company-form.module.css";

export default function CompanyForm() {
  return (
    <div className={styles.container}>

      <h2>Add Company</h2>

      <div className={styles.grid}>

        <div className={styles.inputGroup}>
          <label>Company Name</label>
          <input type="text" placeholder="Khushi Hind" />
        </div>

        <div className={styles.inputGroup}>
          <label>Admin Name</label>
          <input type="text" placeholder="Admin Name" />
        </div>

        <div className={styles.inputGroup}>
          <label>GST Number</label>
          <input type="text" placeholder="GST Number" />
        </div>

        <div className={styles.inputGroup}>
          <label>PF Number</label>
          <input type="text" placeholder="PF Number" />
        </div>

        <div className={styles.inputGroup}>
          <label>ESI Number</label>
          <input type="text" placeholder="ESI Number" />
        </div>

        <div className={styles.inputGroup}>
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" />
        </div>

        <div className={styles.inputGroup}>
          <label>Email</label>
          <input type="email" placeholder="Company Email" />
        </div>

        <div className={styles.inputGroup}>
          <label>Status</label>

          <select>
            <option>Active</option>
            <option>On Hold</option>
          </select>

        </div>

      </div>

      <div className={styles.addressBox}>

        <label>Company Address</label>

        <textarea
          rows={4}
          placeholder="Company Address"
        />

      </div>

      <div className={styles.buttonArea}>

        <button className={styles.cancel}>
          Cancel
        </button>

        <button className={styles.save}>
          Save Company
        </button>

      </div>

    </div>
  );
}