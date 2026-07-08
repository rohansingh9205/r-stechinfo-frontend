"use client";

import AppLayout from "../../components/layout/app-layout";

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

      <div
        style={{
          background:"white",
          padding:"25px",
          borderRadius:"16px",
          boxShadow:"0 8px 20px rgba(0,0,0,.08)"
        }}
      >

        <button>Apply Leave</button>

        <table
          style={{
            marginTop:"20px",
            width:"100%"
          }}
        >

          <thead>

            <tr>

              <th>Employee</th>

              <th>Leave Type</th>

              <th>From</th>

              <th>To</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>Rohan Singh</td>

              <td>Casual Leave</td>

              <td>08 Jul</td>

              <td>09 Jul</td>

              <td>Approved</td>

            </tr>

          </tbody>

        </table>

      </div>

    </AppLayout>
  );
}