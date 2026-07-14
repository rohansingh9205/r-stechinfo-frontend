"use client";

import AppLayout from "@/components/layout/app-layout";
import CompanyForm from "@/components/companies/company-form";

export default function EditCompanyPage() {

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
          Edit Company
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "15px",
          }}
        >
          Update company information.
        </p>

      </div>

      <CompanyForm />

    </AppLayout>

  );

}