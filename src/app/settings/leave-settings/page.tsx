"use client";

import AppLayout from "../../../components/layout/app-layout";

export default function LeaveSettingsPage() {
  return (
    <AppLayout>
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "24px",
        }}
      >
        Leave Settings
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
          <label>Annual Leave (Days)</label>

          <input
            type="number"
            defaultValue={18}
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
          <label>Sick Leave (Days)</label>

          <input
            type="number"
            defaultValue={12}
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
          <label>Casual Leave (Days)</label>

          <input
            type="number"
            defaultValue={10}
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
          <label>Carry Forward Allowed</label>

          <select
            defaultValue="Yes"
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
            }}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <button
          onClick={() => alert("Leave Settings Saved")}
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