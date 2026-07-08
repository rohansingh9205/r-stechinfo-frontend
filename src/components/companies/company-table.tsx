"use client";

import styles from "./company-table.module.css";

const companies = [
  {
    id: 1,
    company: "Khushi Hind",
    admin: "Rohan Singh",
    employees: 125,
    gst: "09ABCDE1234F1Z5",
    pf: "PF123456",
    esi: "ESI654321",
    status: "Active",
  },
  {
    id: 2,
    company: "ABC Industries",
    admin: "Amit Kumar",
    employees: 84,
    gst: "07PQRS1234A1Z2",
    pf: "PF789654",
    esi: "ESI963258",
    status: "Active",
  },
];

export default function CompanyTable() {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search Company..."
        />

        <button className={styles.addBtn}>
          + Add Company
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Company</th>
            <th>Admin</th>
            <th>Employees</th>
            <th>GST</th>
            <th>PF</th>
            <th>ESI</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.company}</td>
              <td>{company.admin}</td>
              <td>{company.employees}</td>
              <td>{company.gst}</td>
              <td>{company.pf}</td>
              <td>{company.esi}</td>

              <td>
                <span className={styles.status}>
                  {company.status}
                </span>
              </td>

              <td>
                <div className={styles.action}>
                  <button className={styles.view}>
                    View
                  </button>

                  <button className={styles.edit}>
                    Edit
                  </button>

                  <button className={styles.delete}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}