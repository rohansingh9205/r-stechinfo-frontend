"use client";

import { useParams } from "next/navigation";
import AppLayout from "../../../components/layout/app-layout";
import AttendanceCalendar from "../../../components/attendance/attendance-calendar";

export default function EmployeeAttendancePage() {
  const params = useParams();

  return (
    <AppLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
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
            Employee Attendance
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#64748b",
            }}
          >
            Employee ID : <b>{params.id}</b>
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

      <AttendanceCalendar employeeId={String(params.id)} />
    </AppLayout>
  );
}