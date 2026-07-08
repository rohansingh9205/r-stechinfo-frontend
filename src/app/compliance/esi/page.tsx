"use client";

import AppLayout from "../../../components/layout/app-layout";

export default function ESIPage() {
  return (
    <AppLayout>
      <h1 style={{ fontSize: "32px", marginBottom: "25px" }}>
        ESI Management
      </h1>

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>ESI Number</th>
            <th>Gross Salary</th>
            <th>Employee ESI</th>
            <th>Employer ESI</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rohan Singh</td>
            <td>ESI1001</td>
            <td>₹35000</td>
            <td>₹263</td>
            <td>₹913</td>
          </tr>
        </tbody>
      </table>
    </AppLayout>
  );
}