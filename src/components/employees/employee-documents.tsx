"use client";

import styles from "./employee-documents.module.css";

const docs = [
  "Aadhar Card",
  "PAN Card",
  "Bank Passbook",
  "Joining Letter",
  "Offer Letter",
  "Education Certificate",
];

export default function EmployeeDocuments() {
  return (
    <div className={styles.container}>

      <h2>Employee Documents</h2>

      <table className={styles.table}>

        <thead>

          <tr>

            <th>Document</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {docs.map((doc) => (

            <tr key={doc}>

              <td>{doc}</td>

              <td>Uploaded</td>

              <td>

                <button className={styles.viewButton}>
                     View
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}