"use client";

import AppLayout from "../../../components/layout/app-layout";
import EmployeeProfile from "../../../components/employees/employee-profile";
import EmployeeDocuments from "../../../components/employees/employee-documents";


export default function EmployeeDetailsPage() {
  return (
    <AppLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          flexWrap: "wrap",
          gap: "12px",
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
            Employee Details
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#64748b",
            }}
          >
            Complete employee information, payroll and documents.
          </p>
        </div>

        <button
          style={{
            border: "none",
            background: "#2563eb",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 600,
          }}
          onClick={() => window.history.back()}
        >
          ← Back
        </button>
      </div>

      <EmployeeProfile />

      <div style={{ height: 24 }} />

      <EmployeeDocuments />
    </AppLayout>
  );
}