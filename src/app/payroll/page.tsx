"use client";

import AppLayout from "../../components/layout/app-layout";
import PayrollTable from "../../components/payroll/payroll-table";
import PayrollCards from "../../components/payroll/payroll-cards";

export default function PayrollPage() {
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
            Payroll Management
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#64748b",
            }}
          >
            Manage employee salary, payroll and payslips.
          </p>
        </div>
      </div>

      <PayrollCards />

<div style={{ height: 24 }} />

<PayrollTable />
    </AppLayout>
  );
}