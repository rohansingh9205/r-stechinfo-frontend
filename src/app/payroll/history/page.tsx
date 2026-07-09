"use client";

import AppLayout from "../../../components/layout/app-layout";

const payrollHistory = [
  {
    id: "PAY001",
    employee: "Rohan Singh",
    company: "Khushi Hind",
    month: "July 2026",
    salary: "₹ 65,000",
    status: "Paid",
  },
  {
    id: "PAY002",
    employee: "Amit Kumar",
    company: "ABC Industries",
    month: "July 2026",
    salary: "₹ 72,000",
    status: "Paid",
  },
  {
    id: "PAY003",
    employee: "Neha Sharma",
    company: "Khushi Hind",
    month: "June 2026",
    salary: "₹ 45,000",
    status: "Paid",
  },
];

export default function PayrollHistoryPage() {
  return (
    <AppLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            Payroll History
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#64748b",
            }}
          >
            View all generated payroll records.
          </p>
        </div>

        <button
          onClick={() => window.history.back()}
          style={{
            border: "none",
            background: "#2563eb",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        }}
      >
        <input
          placeholder="Search Employee..."
          style={{
            width: "320px",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            marginBottom: "24px",
          }}
        />

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#0f172a",
                color: "#fff",
              }}
            >
              <th style={{ padding: "14px" }}>Payroll ID</th>
              <th>Employee</th>
              <th>Company</th>
              <th>Month</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {payrollHistory.map((item) => (
              <tr key={item.id}>
                <td style={{ padding: "14px" }}>{item.id}</td>
                <td>{item.employee}</td>
                <td>{item.company}</td>
                <td>{item.month}</td>
                <td>{item.salary}</td>

                <td>
                  <span
                    style={{
                      background: "#dcfce7",
                      color: "#166534",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontWeight: 600,
                    }}
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  <button
                    style={{
                      border: "none",
                      background: "#2563eb",
                      color: "#fff",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    View Payslip
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}