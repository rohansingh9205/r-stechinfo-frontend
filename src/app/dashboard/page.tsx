"use client";

import AppLayout from "../../components/layout/app-layout";
import DashboardCards from "../../components/dashboard/DashboardCards";
import AttendanceChart from "../../components/dashboard/AttendanceChart";
import PayrollChart from "../../components/dashboard/PayrollChart";
import CompanySummary from "../../components/dashboard/CompanySummary";

export default function DashboardPage() {
  return (
    <AppLayout>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "25px",
        }}
      >
        Dashboard
      </h1>

      <DashboardCards />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <AttendanceChart />

        <PayrollChart />
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "25px",
          marginTop: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        }}
      >
        <h2>Quick Actions</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <button style={buttonStyle}>
            + Employee
          </button>

          <button style={buttonStyle}>
            + Company
          </button>

          <button style={buttonStyle}>
            Attendance
          </button>

          <button style={buttonStyle}>
            Payroll
          </button>
        </div>
      </div>

      <CompanySummary />

    </AppLayout>
  );
}

const buttonStyle = {
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold" as const,
};