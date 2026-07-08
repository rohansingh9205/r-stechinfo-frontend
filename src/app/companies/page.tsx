"use client";

import AppLayout from "../../components/layout/app-layout";
import CompanyTable from "../../components/companies/company-table";

export default function CompaniesPage() {
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
            Company Management
          </h1>

          <p
            style={{
              color: "#64748b",
              marginTop: "5px",
            }}
          >
            Manage all registered companies
          </p>

        </div>
      </div>

      <CompanyTable />

    </AppLayout>
  );
}