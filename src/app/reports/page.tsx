"use client";

import AppLayout from "../../components/layout/app-layout";
import ReportCards from "../../components/reports/report-cards";
import ReportTable from "../../components/reports/report-table";

export default function ReportsPage() {
  return (
    <AppLayout>
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "24px",
        }}
      >
        Reports
      </h1>

      <ReportCards />

      <div style={{ height: "24px" }} />

      <ReportTable />
    </AppLayout>
  );
}