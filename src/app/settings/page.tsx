"use client";

import AppLayout from "../../components/layout/app-layout";

export default function SettingsPage() {
  return (
    <AppLayout>

      <h1
        style={{
          fontSize: "32px",
          marginBottom: "25px",
        }}
      >
        Settings
      </h1>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        }}
      >

        <h3>Application Settings</h3>

        <br />

        <input placeholder="Company Name" />

        <br />
        <br />

        <input placeholder="Company Email" />

        <br />
        <br />

        <input placeholder="Company Phone" />

        <br />
        <br />

        <button>Save Settings</button>

      </div>

    </AppLayout>
  );
}