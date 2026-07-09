"use client";

import styles from "./employee-documents.module.css";

const documents = [
  {
    id: 1,
    name: "Aadhaar Card",
    type: "PDF",
    uploaded: "12 Jan 2024",
    status: "Verified",
  },
  {
    id: 2,
    name: "PAN Card",
    type: "PDF",
    uploaded: "12 Jan 2024",
    status: "Verified",
  },
  {
    id: 3,
    name: "Resume",
    type: "PDF",
    uploaded: "10 Jan 2024",
    status: "Verified",
  },
  {
    id: 4,
    name: "Offer Letter",
    type: "PDF",
    uploaded: "15 Jan 2024",
    status: "Verified",
  },
  {
    id: 5,
    name: "Experience Certificate",
    type: "PDF",
    uploaded: "18 Jan 2024",
    status: "Pending",
  },
];

export default function EmployeeDocuments() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Employee Documents</h2>

        <button className={styles.uploadButton}>
          + Upload Document
        </button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Document</th>
              <th>Type</th>
              <th>Uploaded</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.name}</td>

                <td>{doc.type}</td>

                <td>{doc.uploaded}</td>

                <td>
                  <span
                    className={`${styles.badge} ${
                      doc.status === "Verified"
                        ? styles.verified
                        : styles.pending
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>

                <td>
                  <div className={styles.actions}>
                    <button className={styles.viewButton}>
                      View
                    </button>

                    <button className={styles.downloadButton}>
                      Download
                    </button>

                    <button className={styles.deleteButton}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}