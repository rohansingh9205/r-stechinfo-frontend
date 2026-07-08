"use client";

import AppLayout from "../../../components/layout/app-layout";

export default function PFPage() {
  return (
    <AppLayout>
      <h1 style={{ fontSize: "32px", marginBottom: "25px" }}>
        PF Management
      </h1>

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>UAN</th>
            <th>PF No.</th>
            <th>Employee PF</th>
            <th>Employer PF</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rohan Singh</td>
            <td>100123456789</td>
            <td>PF1001</td>
            <td>₹1800</td>
            <td>₹1800</td>
          </tr>
        </tbody>
      </table>
    </AppLayout>
  );
}