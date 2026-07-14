"use client";

import { useEffect, useState } from "react";
import styles from "./DashboardCards.module.css";
import { getDashboard } from "@/lib/api";

export default function DashboardCards() {

  const [dashboard, setDashboard] = useState<any>(null);

  useEffect(() => {

    async function loadDashboard() {

      try {

        const data = await getDashboard();

        setDashboard(data);

      } catch (error) {

         console.error("Dashboard Error:", error);


      }

    }

    loadDashboard();

  }, []);

  if (!dashboard) {

    return <h3>Loading...</h3>;

  }

  const cards = [

    {
      title: "Companies",
      value: dashboard.totalCompanies,
      color: "#2563eb",
    },

    {
      title: "Departments",
      value: dashboard.totalDepartments,
      color: "#16a34a",
    },

    {
      title: "Employees",
      value: dashboard.totalEmployees,
      color: "#dc2626",
    },

    {
      title: "Users",
      value: dashboard.totalUsers,
      color: "#f59e0b",
    },

  ];

  return (

    <div className={styles.grid}>

      {cards.map((card) => (

        <div
          className={styles.card}
          key={card.title}
        >

          <div
            className={styles.top}
            style={{
              background: card.color,
            }}
          />

          <p>{card.title}</p>

          <h2>{card.value}</h2>

        </div>

      ))}

    </div>

  );

}