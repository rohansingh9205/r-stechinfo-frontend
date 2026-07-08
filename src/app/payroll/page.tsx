"use client";

import AppLayout from "../../components/layout/app-layout";
import PayrollTable from "../../components/payroll/payroll-table";

export default function PayrollPage() {
  return (
    <AppLayout>

      <h1
        style={{
          fontSize:"32px",
          marginBottom:"25px"
        }}
      >
        Payroll Management
      </h1>

      <PayrollTable />

    </AppLayout>
  );
}