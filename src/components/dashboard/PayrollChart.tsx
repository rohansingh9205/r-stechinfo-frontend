"use client";

import styles from "./PayrollChart.module.css";

const months = [
  { month: "Jan", value: 45 },
  { month: "Feb", value: 52 },
  { month: "Mar", value: 48 },
  { month: "Apr", value: 60 },
  { month: "May", value: 75 },
  { month: "Jun", value: 68 },
  { month: "Jul", value: 82 },
];

export default function PayrollChart() {
  return (
    <div className={styles.card}>

      <div className={styles.header}>
        <h2>Monthly Payroll</h2>
        <p>Current Year</p>
      </div>

      <div className={styles.chart}>

        {months.map((item) => (

          <div
            key={item.month}
            className={styles.barContainer}
          >

            <div
              className={styles.bar}
              style={{
                height: `${item.value}%`,
              }}
            />

            <span>{item.month}</span>

          </div>

        ))}

      </div>

    </div>
  );
}