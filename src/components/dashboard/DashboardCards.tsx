"use client";

import styles from "./DashboardCards.module.css";

const cards = [
  {
    title: "Total Employees",
    value: "245",
    color: "#2563eb",
  },
  {
    title: "Present Today",
    value: "220",
    color: "#16a34a",
  },
  {
    title: "Absent",
    value: "15",
    color: "#dc2626",
  },
  {
    title: "Monthly Payroll",
    value: "₹12,45,000",
    color: "#f59e0b",
  },
];

export default function DashboardCards() {
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <div className={styles.card} key={card.title}>

          <div
            className={styles.top}
            style={{ background: card.color }}
          />

          <p>{card.title}</p>

          <h2>{card.value}</h2>

        </div>
      ))}
    </div>
  );
}