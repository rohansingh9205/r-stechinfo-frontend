"use client";

import AppLayout from "../../components/layout/app-layout";
import DashboardCards from "../../components/dashboard/DashboardCards";
import AttendanceChart from "../../components/dashboard/AttendanceChart";
import PayrollChart from "../../components/dashboard/PayrollChart";
import CompanySummary from "../../components/dashboard/CompanySummary";

export default function DashboardPage() {
  return (
    <AppLayout>
      <h1>Dashboard</h1>

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

      <div style={{ marginTop: "20px" }}>
        <CompanySummary />
      </div>
    </AppLayout>
  );
}