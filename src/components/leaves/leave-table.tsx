"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./leave-table.module.css";

interface Leave {
  id: string;
  employee: string;
  type: string;
  from: string;
  to: string;
  days: number;
  status: "Approved" | "Pending" | "Rejected";
}

const leaveData: Leave[] = [
  {
    id: "EMP001",
    employee: "Rohan Singh",
    type: "Casual Leave",
    from: "08 Jul 2026",
    to: "09 Jul 2026",
    days: 2,
    status: "Approved",
  },
  {
    id: "EMP002",
    employee: "Amit Kumar",
    type: "Sick Leave",
    from: "11 Jul 2026",
    to: "12 Jul 2026",
    days: 2,
    status: "Pending",
  },
  {
    id: "EMP003",
    employee: "Neha Sharma",
    type: "Annual Leave",
    from: "15 Jul 2026",
    to: "20 Jul 2026",
    days: 6,
    status: "Rejected",
  },
];

export default function LeaveTable() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return leaveData.filter(
      (item) =>
        item.employee.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <input
          className={styles.search}
          placeholder="Search Employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className={styles.apply}
          onClick={() => router.push("/leaves/apply")}
        >
          Apply Leave
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>From</th>
            <th>To</th>
            <th>Days</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.employee}</td>
              <td>{item.type}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>{item.days}</td>

              <td>
                <span
                  className={
                    item.status === "Approved"
                      ? styles.approved
                      : item.status === "Pending"
                      ? styles.pending
                      : styles.rejected
                  }
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}

          {filtered.length === 0 && (
            <tr>
              <td colSpan={7} className={styles.empty}>
                No Leave Record Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}