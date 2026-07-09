"use client";

import styles from "./leave-cards.module.css";

const cards = [
  {
    title: "Total Leaves",
    value: "120",
    color: "#2563eb",
  },
  {
    title: "Approved",
    value: "84",
    color: "#16a34a",
  },
  {
    title: "Pending",
    value: "28",
    color: "#f59e0b",
  },
  {
    title: "Rejected",
    value: "8",
    color: "#ef4444",
  },
];

export default function LeaveCards() {
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