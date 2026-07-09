"use client";

import { useMemo, useState } from "react";
import styles from "./payroll-table.module.css";
import PayslipDialog from "./payslip-dialog";
import { useRouter } from "next/navigation";

interface PayrollEmployee {
  id: string;
  name: string;
  company: string;
  designation: string;
  salary: number;
  month: string;
  status: "Paid" | "Pending";
}

const payrollData: PayrollEmployee[] = [
  {
    id: "EMP001",
    name: "Rohan Singh",
    company: "Khushi Hind",
    designation: "Frontend Developer",
    salary: 65000,
    month: "July 2026",
    status: "Pending",
  },
  {
    id: "EMP002",
    name: "Amit Kumar",
    company: "ABC Industries",
    designation: "Backend Developer",
    salary: 72000,
    month: "July 2026",
    status: "Paid",
  },
  {
    id: "EMP003",
    name: "Neha Sharma",
    company: "Khushi Hind",
    designation: "HR Executive",
    salary: 45000,
    month: "July 2026",
    status: "Pending",
  },
  {
    id: "EMP004",
    name: "Priya Verma",
    company: "Khushi Hind",
    designation: "UI Designer",
    salary: 56000,
    month: "July 2026",
    status: "Paid",
  },
  {
    id: "EMP005",
    name: "Akash Gupta",
    company: "ABC Industries",
    designation: "Accountant",
    salary: 42000,
    month: "July 2026",
    status: "Pending",
  },
];

export default function PayrollTable() {
  const [search, setSearch] = useState("");
  const [openPayslip, setOpenPayslip] = useState(false);
  const router = useRouter();

  const filtered = useMemo(() => {
    return payrollData.filter(
      (emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.id.toLowerCase().includes(search.toLowerCase()) ||
        emp.company.toLowerCase().includes(search.toLowerCase())
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
  className={styles.generate}
  onClick={() => router.push("/payroll/generate")}
>
  Generate Payroll
</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Month</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.company}</td>
              <td>{emp.designation}</td>
              <td>₹ {emp.salary.toLocaleString()}</td>
              <td>{emp.month}</td>

              <td>
                <span
                  className={
                    emp.status === "Paid"
                      ? styles.paid
                      : styles.pending
                  }
                >
                  {emp.status}
                </span>
              </td>

              <td>
                <div className={styles.actions}>
                  <button className={styles.view}>
                    View
                  </button>

                  <button className={styles.edit}>
                    Edit
                  </button>

                  <button
                  className={styles.payslip}
                   onClick={() => setOpenPayslip(true)}
                      >
                       Payslip
                    </button>
                </div>
              </td>
            </tr>
          ))}

          {filtered.length === 0 && (
            <tr>
              <td
                colSpan={8}
                className={styles.empty}
              >
                No employee found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <PayslipDialog
  open={openPayslip}
  onClose={() => setOpenPayslip(false)}
/>
    </div>
  );
}
