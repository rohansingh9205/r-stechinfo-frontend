"use client";

import AppLayout from "../../../components/layout/app-layout";

export default function EmailSettingsPage() {
  return (
    <AppLayout>
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "24px",
        }}
      >
        Email Settings
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
        <div style={{ marginBottom: "20px" }}>
          <label>SMTP Host</label>

          <input
            defaultValue="smtp.gmail.com"
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>SMTP Port</label>

          <input
            type="number"
            defaultValue={587}
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Email Address</label>

          <input
            defaultValue="admin@company.com"
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Email Password</label>

          <input
            type="password"
            defaultValue="password"
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
          onClick={() => alert("Email Settings Saved")}
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