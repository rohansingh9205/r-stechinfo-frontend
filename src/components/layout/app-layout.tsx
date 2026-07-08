"use client";

import AppSidebar from "./app-sidebar";
import AppHeader from "./app-header";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <AppSidebar />

      <div
        style={{
          flex: 1,
          background: "#f1f5f9",
        }}
      >
        <AppHeader />

        <main
          style={{
            padding: "30px",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}