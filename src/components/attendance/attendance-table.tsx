"use client";

import { useMemo, useState } from "react";
import styles from "./attendance-table.module.css";
import { useRouter } from "next/navigation";

interface Attendance {
  id: string;
  name: string;
  company: string;
  date: string;
  status: "Present" | "Absent" | "Half Day";
}

const attendanceData: Attendance[] = [
  {
    id: "EMP001",
    name: "Rohan Singh",
    company: "Khushi Hind",
    date: "08-07-2026",
    status: "Present",
  },
  {
    id: "EMP002",
    name: "Amit Kumar",
    company: "ABC Industries",
    date: "08-07-2026",
    status: "Absent",
  },
  {
    id: "EMP003",
    name: "Neha Sharma",
    company: "Khushi Hind",
    date: "08-07-2026",
    status: "Half Day",
  },
  {
    id: "EMP004",
    name: "Priya Verma",
    company: "Khushi Hind",
    date: "08-07-2026",
    status: "Present",
  },
  {
    id: "EMP005",
    name: "Akash Gupta",
    company: "ABC Industries",
    date: "08-07-2026",
    status: "Present",
  },
];

const PAGE_SIZE = 5;

export default function AttendanceTable() {
    const router = useRouter();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return attendanceData.filter(
      (emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.id.toLowerCase().includes(search.toLowerCase()) ||
        emp.company.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const rows = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <input
          className={styles.search}
          placeholder="Search Employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className={styles.addButton}>
          Mark Attendance
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.company}</td>
              <td>{emp.date}</td>
              <td>{emp.status}</td>
              <td>
  <button
    className={styles.viewButton}
    onClick={() => router.push(`/attendance/${emp.id}`)}
  >
    View
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}