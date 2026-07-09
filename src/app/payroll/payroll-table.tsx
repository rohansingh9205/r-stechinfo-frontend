"use client";

import styles from "./payroll-table.module.css";

const payroll = [
  {
    id: "EMP001",
    name: "Rohan Singh",
    company: "Khushi Hind",
    salary: 65000,
    month: "July 2026",
    status: "Pending",
  },
  {
    id: "EMP002",
    name: "Amit Kumar",
    company: "ABC Industries",
    salary: 52000,
    month: "July 2026",
    status: "Paid",
  },
  {
    id: "EMP003",
    name: "Neha Sharma",
    company: "Khushi Hind",
    salary: 48000,
    month: "July 2026",
    status: "Pending",
  },
];

export default function PayrollTable() {
  return (
    <div className={styles.container}>

      <div className={styles.topBar}>

        <input
          placeholder="Search Employee..."
          className={styles.search}
        />

        <button className={styles.generate}>
          Generate Payroll
        </button>

      </div>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Salary</th>
            <th>Month</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {payroll.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.company}</td>
              <td>₹ {emp.salary}</td>
              <td>{emp.month}</td>

              <td>

                <span
                  className={
                    emp.status === "Paid"
                      ? styles.paid
                      : styles.pending
                  }
                >
                  {emp.status}
                </span>

              </td>

              <td>

                <button className={styles.view}>
                  View
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}