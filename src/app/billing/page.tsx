"use client";

import AppLayout from "../../components/layout/app-layout";

export default function BillingPage() {
  return (
    <AppLayout>

      <h1
        style={{
          fontSize: "32px",
          marginBottom: "25px",
        }}
      >
        Billing
      </h1>

      <table>

        <thead>

          <tr>

            <th>Invoice</th>

            <th>Company</th>

            <th>Amount</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>INV001</td>

            <td>Khushi Hind</td>

            <td>₹50,000</td>

            <td>Paid</td>

          </tr>

          <tr>

            <td>INV002</td>

            <td>ABC Industries</td>

            <td>₹75,000</td>

            <td>Pending</td>

          </tr>

        </tbody>

      </table>

    </AppLayout>
  );
}