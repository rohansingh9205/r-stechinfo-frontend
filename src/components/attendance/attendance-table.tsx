"use client";

import styles from "./attendance-table.module.css";

const attendance = [
  {
    id: "EMP001",
    name: "Rohan Singh",
    company: "Khushi Hind",
    date: "08-07-2026",
    status: "Present",
  },
  {
    id: "EMP002",
    name: "Amit Kumar",
    company: "ABC Industries",
    date: "08-07-2026",
    status: "Absent",
  },
  {
    id: "EMP003",
    name: "Neha Sharma",
    company: "Khushi Hind",
    date: "08-07-2026",
    status: "Half Day",
  },
];

export default function AttendanceTable() {
  return (
    <div className={styles.container}>

      <div className={styles.topBar}>

        <input
          type="text"
          placeholder="Search Employee..."
          className={styles.search}
        />

        <button>
          Mark Attendance
        </button>

      </div>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Date</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {attendance.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.id}</td>

              <td>{emp.name}</td>

              <td>{emp.company}</td>

              <td>{emp.date}</td>

              <td>{emp.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}