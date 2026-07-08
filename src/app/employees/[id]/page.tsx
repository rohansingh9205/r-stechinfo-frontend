"use client";

import AppLayout from "../../../components/layout/app-layout";
import EmployeeProfile from "../../../components/employees/employee-profile";
import EmployeeDocuments from "../../../components/employees/employee-documents";

export default function EmployeeDetailsPage() {
  return (
    <AppLayout>

      <h1
        style={{
          fontSize: "32px",
          marginBottom: "25px",
        }}
      >
        Employee Details
      </h1>

      <EmployeeProfile />

      <div style={{ height: "20px" }} />

      <EmployeeDocuments />

    </AppLayout>
  );
}