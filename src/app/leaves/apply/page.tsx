"use client";

import AppLayout from "../../../components/layout/app-layout";

export default function ApplyLeavePage() {
  return (
    <AppLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          flexWrap: "wrap",
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
            Apply Leave
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#64748b",
            }}
          >
            Submit a new leave request.
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

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          maxWidth: "700px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div>
            <label>Employee</label>

            <select
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px",
                borderRadius: "10px",
              }}
            >
              <option>Rohan Singh</option>
              <option>Amit Kumar</option>
              <option>Neha Sharma</option>
            </select>
          </div>

          <div>
            <label>Leave Type</label>

            <select
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px",
                borderRadius: "10px",
              }}
            >
              <option>Casual Leave</option>
              <option>Sick Leave</option>
              <option>Annual Leave</option>
              <option>Half Day</option>
            </select>
          </div>

          <div>
            <label>From Date</label>

            <input
              type="date"
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px",
                borderRadius: "10px",
              }}
            />
          </div>

          <div>
            <label>To Date</label>

            <input
              type="date"
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <label>Reason</label>

          <textarea
            rows={5}
            placeholder="Enter leave reason..."
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              borderRadius: "10px",
              resize: "none",
            }}
          />
        </div>

        <button
          onClick={() => alert("Leave Applied Successfully")}
          style={{
            marginTop: "30px",
            border: "none",
            background: "#16a34a",
            color: "#fff",
            padding: "14px 24px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Submit Leave Request
        </button>
      </div>
    </AppLayout>
  );
}