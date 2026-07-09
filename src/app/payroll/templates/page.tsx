"use client";

import AppLayout from "../../../components/layout/app-layout";

export default function PayrollTemplatePage() {
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
            Salary Structure
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#64748b",
            }}
          >
            Configure salary template used for payroll generation.
          </p>
        </div>

        <button
          onClick={() => history.back()}
          style={{
            border: "none",
            background: "#2563eb",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "28px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          maxWidth: "700px",
        }}
      >
        <h2
          style={{
            marginTop: 0,
          }}
        >
          Default Salary Template
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "24px",
          }}
        >
          <Input label="Basic Salary %" value="50" />

          <Input label="HRA %" value="20" />

          <Input label="DA %" value="10" />

          <Input label="Special Allowance %" value="10" />

          <Input label="PF %" value="12" />

          <Input label="ESI %" value="0.75" />

          <Input label="Professional Tax" value="200" />

          <Input label="TDS %" value="5" />

          <Input label="Bonus %" value="5" />

          <Input label="Overtime Rate / Hour" value="250" />
        </div>

        <button
          style={{
            marginTop: "30px",
            border: "none",
            background: "#16a34a",
            color: "#fff",
            padding: "14px 24px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 600,
          }}
          onClick={() =>
            alert("Salary Template Saved Successfully")
          }
        >
          Save Salary Structure
        </button>
      </div>
    </AppLayout>
  );
}

function Input({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          fontWeight: 600,
        }}
      >
        {label}
      </label>

      <input
        defaultValue={value}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
        }}
      />
    </div>
  );
}