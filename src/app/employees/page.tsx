"use client";

import AppLayout from "../../components/layout/app-layout";
import EmployeeTable from "../../components/employees/employee-table";

export default function EmployeesPage() {
  return (
    <AppLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            Employee Management
          </h1>

          <p
            style={{
              color: "#64748b",
              marginTop: "5px",
            }}
          >
            Manage all employees
          </p>
        </div>
      </div>

      <EmployeeTable />
    </AppLayout>
  );
}