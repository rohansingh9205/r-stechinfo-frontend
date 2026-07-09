"use client";

import AppLayout from "../../../components/layout/app-layout";

export default function CompanySettingsPage() {
  return (
    <AppLayout>
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "24px",
        }}
      >
        Company Settings
      </h1>

      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          maxWidth: "700px",
        }}
      >
        <div style={{ marginBottom: "18px" }}>
          <label>Company Name</label>

          <input
            defaultValue="Khushi Hind Pvt. Ltd."
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label>Email</label>

          <input
            defaultValue="info@khushihind.com"
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label>Phone</label>

          <input
            defaultValue="+91 9876543210"
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label>Address</label>

          <textarea
            rows={4}
            defaultValue="New Delhi, India"
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
            }}
          />
        </div>

        <button
          onClick={() => alert("Company Settings Saved")}
          style={{
            padding: "12px 22px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Save Changes
        </button>
      </div>
    </AppLayout>
  );
}