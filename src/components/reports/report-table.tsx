"use client";

import styles from "./report-table.module.css";

const reports = [
  {
    name: "Attendance Report",
    type: "Attendance",
    date: "08 Jul 2026",
  },
  {
    name: "Payroll Report",
    type: "Payroll",
    date: "08 Jul 2026",
  },
  {
    name: "Leave Report",
    type: "Leave",
    date: "08 Jul 2026",
  },
];

export default function ReportTable() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Report Name</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.date}</td>

              <td>
                <button className={styles.download}>
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}