"use client";

import styles from "./AttendanceChart.module.css";

const attendance = [
  {
    title: "Present",
    value: 220,
    color: "#16a34a",
  },
  {
    title: "Absent",
    value: 15,
    color: "#dc2626",
  },
  {
    title: "Leave",
    value: 8,
    color: "#f59e0b",
  },
  {
    title: "Half Day",
    value: 2,
    color: "#2563eb",
  },
];

export default function AttendanceChart() {
  return (
    <div className={styles.card}>

      <div className={styles.header}>
        <h2>Today's Attendance</h2>
        <p>Current Status</p>
      </div>

      <div className={styles.circle}>

        <div
          className={styles.inner}
        >
          245
        </div>

      </div>

      <div className={styles.list}>

        {attendance.map((item) => (

          <div
            key={item.title}
            className={styles.item}
          >

            <div
              className={styles.dot}
              style={{
                background: item.color,
              }}
            />

            <span>{item.title}</span>

            <strong>{item.value}</strong>

          </div>

        ))}

      </div>

    </div>
  );
}