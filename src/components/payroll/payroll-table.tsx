"use client";

import styles from "./payroll-table.module.css";

const payroll = [
  {
    id: "EMP001",
    name: "Rohan Singh",
    basic: "25000",
    hra: "8000",
    pf: "1800",
    esi: "500",
    net: "30700",
  },
  {
    id: "EMP002",
    name: "Amit Kumar",
    basic: "30000",
    hra: "9000",
    pf: "1800",
    esi: "600",
    net: "36600",
  },
];

export default function PayrollTable() {
  return (
    <div className={styles.container}>

      <div className={styles.topBar}>
        <input
          className={styles.search}
          placeholder="Search Employee..."
        />

        <button>Generate Payroll</button>
      </div>

      <table className={styles.table}>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Basic</th>
            <th>HRA</th>
            <th>PF</th>
            <th>ESI</th>
            <th>Net Salary</th>
          </tr>

        </thead>

        <tbody>

          {payroll.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>₹{item.basic}</td>
              <td>₹{item.hra}</td>
              <td>₹{item.pf}</td>
              <td>₹{item.esi}</td>
              <td>₹{item.net}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}