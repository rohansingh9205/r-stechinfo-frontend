"use client";

import AppLayout from "../../components/layout/app-layout";
import SettingsCards from "../../components/settings/settings-cards";

export default function SettingsPage() {
  return (
    <AppLayout>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: 700,
          marginBottom: "24px",
        }}
      >
        Settings
      </h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: "24px",
        }}
      >
        Configure HRMS system settings.
      </p>

      <SettingsCards />
    </AppLayout>
  );
}