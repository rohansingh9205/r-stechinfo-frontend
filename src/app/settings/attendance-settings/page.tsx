"use client";

import AppLayout from "../../../components/layout/app-layout";

export default function AttendanceSettingsPage() {
  return (
    <AppLayout>
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "24px",
        }}
      >
        Attendance Settings
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
          <label>Office Start Time</label>

          <input
            type="time"
            defaultValue="09:00"
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
          <label>Office End Time</label>

          <input
            type="time"
            defaultValue="18:00"
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
          <label>Late Mark After (Minutes)</label>

          <input
            type="number"
            defaultValue={15}
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
          <label>Half Day After (Hours)</label>

          <input
            type="number"
            defaultValue={4}
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
          onClick={() => alert("Attendance Settings Saved")}
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