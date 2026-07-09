"use client";

import AppLayout from "../../../components/layout/app-layout";
import CompanyForm from "../../../components/companies/company-form";

export default function AddCompanyPage() {
  return (
    <AppLayout>
      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          Add Company
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "15px",
          }}
        >
          Create a new company.
        </p>
      </div>

      <CompanyForm />
    </AppLayout>
  );
}