"use client";

import { useState } from "react";

const totalDays = 31;

const statusList = [
  "P",
  "A",
  "L",
  "HD",
  "WO",
  "H",
];

const statusColor: Record<string, string> = {
  P: "#22c55e",
  A: "#ef4444",
  L: "#3b82f6",
  HD: "#f59e0b",
  WO: "#6b7280",
  H: "#8b5cf6",
};

interface Props {
  employeeId: string;
}

export default function AttendanceCalendar({
  employeeId,
}: Props) {
  const [attendance, setAttendance] = useState<string[]>(
    Array(totalDays).fill("P")
  );

  const summary = {
    present: attendance.filter((x) => x === "P").length,
    absent: attendance.filter((x) => x === "A").length,
    leave: attendance.filter((x) => x === "L").length,
    halfDay: attendance.filter((x) => x === "HD").length,
    holiday: attendance.filter((x) => x === "H").length,
    weekOff: attendance.filter((x) => x === "WO").length,
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: 8,
        }}
      >
        July 2026 Attendance
      </h2>

      <p
        style={{
          color: "#64748b",
          marginBottom: 20,
        }}
      >
        Employee : <b>{employeeId}</b>
      </p>

      <div
  style={{
    display: "flex",
    gap: "12px",
    marginBottom: "24px",
  }}
>
  <button
    onClick={() => {
      console.log(attendance);
      alert("Attendance Saved Successfully");
    }}
    style={{
      padding: "12px 20px",
      background: "#16a34a",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: 600,
    }}
  >
    💾 Save Attendance
  </button>

  <button
    onClick={() =>
      setAttendance(Array(totalDays).fill("P"))
    }
    style={{
      padding: "12px 20px",
      background: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: 600,
    }}
  >
    ✓ Mark Full Month Present
  </button>
</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gap: "12px",
          marginBottom: "30px",
        }}
      >
        <SummaryCard
          title="Present"
          value={summary.present}
          color="#dcfce7"
        />

        <SummaryCard
          title="Absent"
          value={summary.absent}
          color="#fee2e2"
        />

        <SummaryCard
          title="Leave"
          value={summary.leave}
          color="#dbeafe"
        />

        <SummaryCard
          title="Half Day"
          value={summary.halfDay}
          color="#fef3c7"
        />

        <SummaryCard
          title="Holiday"
          value={summary.holiday}
          color="#ede9fe"
        />

        <SummaryCard
          title="Week Off"
          value={summary.weekOff}
          color="#e5e7eb"
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(110px,1fr))",
          gap: "14px",
        }}
      >
        {attendance.map((status, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "14px",
              textAlign: "center",
              background: "#f8fafc",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              {index + 1}
            </div>

            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: statusColor[status],
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto 10px",
                fontWeight: 700,
              }}
            >
              {status}
            </div>

            <select
              value={status}
              onChange={(e) => {
                const updated = [...attendance];
                updated[index] = e.target.value;
                setAttendance(updated);
              }}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "8px",
              }}
            >
              {statusList.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

function SummaryCard({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div
      style={{
        background: color,
        borderRadius: "12px",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          margin: 0,
        }}
      >
        {value}
      </h2>

      <p
        style={{
          marginTop: 8,
          marginBottom: 0,
          fontWeight: 600,
        }}
      >
        {title}
      </p>
    </div>
  );
}