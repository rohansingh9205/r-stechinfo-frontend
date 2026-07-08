"use client";

import styles from "./CompanySummary.module.css";

const companies = [
  {
    name: "Khushi Hind",
    employees: 85,
    status: "Active",
  },
  {
    name: "ABC Industries",
    employees: 62,
    status: "Active",
  },
  {
    name: "Sharma Pvt Ltd",
    employees: 41,
    status: "Active",
  },
  {
    name: "R.K. Services",
    employees: 33,
    status: "Hold",
  },
];

export default function CompanySummary() {
  return (
    <div className={styles.card}>

      <h2>Company Summary</h2>

      <table className={styles.table}>

        <thead>

          <tr>

            <th>Company</th>

            <th>Employees</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {companies.map((company) => (

            <tr key={company.name}>

              <td>{company.name}</td>

              <td>{company.employees}</td>

              <td>

                <span
                  className={
                    company.status === "Active"
                      ? styles.active
                      : styles.hold
                  }
                >
                  {company.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}