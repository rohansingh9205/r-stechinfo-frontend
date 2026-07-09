"use client";

import AppLayout from "../../../components/layout/app-layout";

const balances = [
  {
    type: "Casual Leave",
    total: 12,
    used: 4,
    remaining: 8,
  },
  {
    type: "Sick Leave",
    total: 10,
    used: 2,
    remaining: 8,
  },
  {
    type: "Annual Leave",
    total: 20,
    used: 7,
    remaining: 13,
  },
];

export default function LeaveBalancePage() {
  return (
    <AppLayout>
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "24px",
        }}
      >
        Leave Balance
      </h1>

      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        }}
      >
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
              <th style={{ padding: "14px" }}>Leave Type</th>
              <th>Total</th>
              <th>Used</th>
              <th>Remaining</th>
            </tr>
          </thead>

          <tbody>
            {balances.map((item) => (
              <tr key={item.type}>
                <td style={{ padding: "14px" }}>
                  {item.type}
                </td>

                <td>{item.total}</td>

                <td>{item.used}</td>

                <td
                  style={{
                    fontWeight: 700,
                    color: "#16a34a",
                  }}
                >
                  {item.remaining}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}