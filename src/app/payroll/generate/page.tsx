"use client";

import AppLayout from "../../../components/layout/app-layout";

export default function GeneratePayrollPage() {
  return (
    <AppLayout>
      <h1
        style={{
          margin: 0,
          fontSize: "32px",
          fontWeight: 700,
        }}
      >
        Generate Payroll
      </h1>

      <p
        style={{
          marginTop: "8px",
          color: "#64748b",
        }}
      >
        Generate salary for all employees.
      </p>

      <div
        style={{
          marginTop: "30px",
          background: "#fff",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          <div>
            <label>Company</label>

            <select
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px",
                borderRadius: "10px",
              }}
            >
              <option>Khushi Hind</option>
              <option>ABC Industries</option>
            </select>
          </div>

          <div>
            <label>Month</label>

            <select
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px",
                borderRadius: "10px",
              }}
            >
              <option>July</option>
              <option>August</option>
            </select>
          </div>

          <div>
            <label>Year</label>

            <select
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px",
                borderRadius: "10px",
              }}
            >
              <option>2026</option>
              <option>2027</option>
            </select>
          </div>
        </div>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 26px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
          }}
          onClick={() =>
            alert("Payroll Generated Successfully")
          }
        >
          Generate Payroll
        </button>
      </div>
    </AppLayout>
  );
}