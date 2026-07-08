"use client";

import AppLayout from "../../../components/layout/app-layout";

export default function LWFPage() {
  return (
    <AppLayout>
      <h1 style={{ fontSize: "32px", marginBottom: "25px" }}>
        Labour Welfare Fund
      </h1>

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>State</th>
            <th>LWF Amount</th>
            <th>Month</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rohan Singh</td>
            <td>Uttar Pradesh</td>
            <td>₹20</td>
            <td>July</td>
          </tr>
        </tbody>
      </table>
    </AppLayout>
  );
}