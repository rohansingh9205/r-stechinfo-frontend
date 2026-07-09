"use client";

import styles from "./payroll-cards.module.css";

const cards = [
  {
    title: "Total Payroll",
    value: "₹ 2,80,000",
    color: "#2563eb",
  },
  {
    title: "Paid",
    value: "₹ 1,28,000",
    color: "#16a34a",
  },
  {
    title: "Pending",
    value: "₹ 1,52,000",
    color: "#ef4444",
  },
  {
    title: "Employees",
    value: "5",
    color: "#f59e0b",
  },
];

export default function PayrollCards() {
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