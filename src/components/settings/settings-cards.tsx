"use client";

import { useRouter } from "next/navigation";
import styles from "./settings-cards.module.css";

const settings = [
  "Company Settings",
  "Attendance Settings",
  "Payroll Settings",
  "Leave Settings",
  "Email Settings",
  "Change Password",
];

export default function SettingsCards() {
  const router = useRouter();

  return (
    <div className={styles.grid}>
      {settings.map((item) => (
        <div
          key={item}
          className={styles.card}
        >
          <h3>{item}</h3>

          <button
            onClick={() =>
              router.push(
                `/settings/${item
                  .toLowerCase()
                  .replaceAll(" ", "-")}`
              )
            }
          >
            Open
          </button>
        </div>
      ))}
    </div>
  );
}