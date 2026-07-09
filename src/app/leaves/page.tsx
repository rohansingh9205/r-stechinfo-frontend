"use client";

import AppLayout from "../../components/layout/app-layout";
import LeaveCards from "../../components/leaves/leave-cards";
import LeaveTable from "../../components/leaves/leave-table";

export default function LeavePage() {
  return (
    <AppLayout>

      <h1
        style={{
          fontSize:"32px",
          marginBottom:"25px"
        }}
      >
        Leave Management
      </h1>

     <LeaveCards />

<div style={{ height: "24px" }} />

<LeaveTable />

    </AppLayout>
  );
}