"use client";

import AppLayout from "../../components/layout/app-layout";

export default function ReportsPage() {
  const reports = [
    "Attendance Report",
    "Payroll Report",
    "Employee Report",
    "Company Report",
    "PF Report",
    "ESI Report",
  ];

  return (
    <AppLayout>
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "25px",
        }}
      >
        Reports
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
        }}
      >
        {reports.map((item) => (
          <div
            key={item}
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >
            <h3>{item}</h3>

            <p
              style={{
                margin: "15px 0",
                color: "#64748b",
              }}
            >
              Download or Export Report
            </p>

            <button>Export</button>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}