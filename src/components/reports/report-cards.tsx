"use client";

import styles from "./report-cards.module.css";

const cards = [
  {
    title: "Attendance Reports",
    value: "245",
    color: "#2563eb",
  },
  {
    title: "Payroll Reports",
    value: "58",
    color: "#16a34a",
  },
  {
    title: "Leave Reports",
    value: "37",
    color: "#f59e0b",
  },
  {
    title: "Employees",
    value: "85",
    color: "#ef4444",
  },
];

export default function ReportCards() {
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <div
          key={card.title}
          className={styles.card}
          style={{
            borderTop: `5px solid ${card.color}`,
          }}
        >
          <h4>{card.title}</h4>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}