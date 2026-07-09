"use client";

import styles from "./company-profile.module.css";

export default function CompanyProfile() {
  const company = {
    name: "R&S Tech Info",
    code: "RST001",
    admin: "Rohan Singh",
    email: "info@rstechinfo.com",
    phone: "+91 9876543210",
    website: "www.rstechinfo.com",
    gst: "09ABCDE1234F1Z5",
    pan: "ABCDE1234F",
    pf: "PF123456",
    esi: "ESI654321",
    employees: 125,
    address: "New Delhi, India",
    status: "Active",
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>{company.name}</h2>
          <p>{company.code}</p>
        </div>

        <span className={styles.status}>
          {company.status}
        </span>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Company Information</h3>

          <div className={styles.item}>
            <span>Company Name</span>
            <strong>{company.name}</strong>
          </div>

          <div className={styles.item}>
            <span>Admin</span>
            <strong>{company.admin}</strong>
          </div>

          <div className={styles.item}>
            <span>Email</span>
            <strong>{company.email}</strong>
          </div>

          <div className={styles.item}>
            <span>Phone</span>
            <strong>{company.phone}</strong>
          </div>

          <div className={styles.item}>
            <span>Website</span>
            <strong>{company.website}</strong>
          </div>

          <div className={styles.item}>
            <span>Address</span>
            <strong>{company.address}</strong>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Compliance Details</h3>

          <div className={styles.item}>
            <span>GST</span>
            <strong>{company.gst}</strong>
          </div>

          <div className={styles.item}>
            <span>PAN</span>
            <strong>{company.pan}</strong>
          </div>

          <div className={styles.item}>
            <span>PF</span>
            <strong>{company.pf}</strong>
          </div>

          <div className={styles.item}>
            <span>ESI</span>
            <strong>{company.esi}</strong>
          </div>

          <div className={styles.item}>
            <span>Total Employees</span>
            <strong>{company.employees}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}