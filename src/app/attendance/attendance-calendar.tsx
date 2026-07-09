"use client";

import { useMemo, useState } from "react";
import styles from "./attendance-calendar.module.css";

type Status =
  | "Present"
  | "Absent"
  | "Leave"
  | "Half Day";

const statusColor: Record<Status, string> = {
  Present: "#22c55e",
  Absent: "#ef4444",
  Leave: "#3b82f6",
  "Half Day": "#f59e0b",
};

export default function AttendanceCalendar() {
  const days = useMemo(
    () => Array.from({ length: 31 }, (_, i) => i + 1),
    []
  );

  const [attendance, setAttendance] = useState<
    Record<number, Status>
  >({});

  const markAllPresent = () => {
    const data: Record<number, Status> = {};

    days.forEach((d) => {
      data[d] = "Present";
    });

    setAttendance(data);
  };

  const clearAttendance = () => {
    setAttendance({});
  };

  const updateStatus = (
    day: number,
    status: Status
  ) => {
    setAttendance((prev) => ({
      ...prev,
      [day]: status,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>July 2026</h2>

          <p>Employee Monthly Attendance</p>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.present}
            onClick={markAllPresent}
          >
            ✓ Mark Full Month Present
          </button>

          <button
            className={styles.clear}
            onClick={clearAttendance}
          >
            Clear
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {days.map((day) => (
          <div
            key={day}
            className={styles.card}
          >
            <h3>{day}</h3>

            <span
              className={styles.badge}
              style={{
                background:
                  attendance[day]
                    ? statusColor[attendance[day]]
                    : "#cbd5e1",
              }}
            >
              {attendance[day] ?? "--"}
            </span>

            <select
              value={attendance[day] ?? ""}
              onChange={(e) =>
                updateStatus(
                  day,
                  e.target.value as Status
                )
              }
            >
              <option value="">
                Select
              </option>

              <option value="Present">
                Present
              </option>

              <option value="Absent">
                Absent
              </option>

              <option value="Leave">
                Leave
              </option>

              <option value="Half Day">
                Half Day
              </option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}