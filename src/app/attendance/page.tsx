"use client";

import AppLayout from "../../components/layout/app-layout";
import AttendanceTable from "../../components/attendance/attendance-table";

export default function AttendancePage() {
  return (
    <AppLayout>

      <h1
        style={{
          fontSize:"32px",
          marginBottom:"25px",
        }}
      >
        Attendance Management
      </h1>

      <AttendanceTable />

    </AppLayout>
  );
}