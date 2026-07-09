"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./company-table.module.css";

interface Company {
  id: number;
  company: string;
  admin: string;
  employees: number;
  gst: string;
  pf: string;
  esi: string;
  status: "Active" | "Inactive";
}

const companyData: Company[] = [
  {
    id: 1,
    company: "Khushi Hind",
    admin: "Rohan Singh",
    employees: 125,
    gst: "09ABCDE1234F1Z5",
    pf: "PF123456",
    esi: "ESI654321",
    status: "Active",
  },
  {
    id: 2,
    company: "ABC Industries",
    admin: "Amit Kumar",
    employees: 84,
    gst: "07PQRS1234A1Z2",
    pf: "PF789654",
    esi: "ESI963258",
    status: "Active",
  },
  {
    id: 3,
    company: "Tech Vision Pvt Ltd",
    admin: "Neha Sharma",
    employees: 63,
    gst: "07TECH1234A1Z8",
    pf: "PF852963",
    esi: "ESI456789",
    status: "Inactive",
  },
  {
    id: 4,
    company: "Global Infosys",
    admin: "Raj Mehta",
    employees: 205,
    gst: "24GLOBAL4567A1Z5",
    pf: "PF112233",
    esi: "ESI112233",
    status: "Active",
  },
];

const PAGE_SIZE = 5;

export default function CompanyTable() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredCompanies = useMemo(() => {
    return companyData.filter(
      (company) =>
        company.company.toLowerCase().includes(search.toLowerCase()) ||
        company.admin.toLowerCase().includes(search.toLowerCase()) ||
        company.gst.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCompanies.length / PAGE_SIZE)
  );

  const companies = filteredCompanies.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const handleView = (id: number) => {
    router.push(`/companies/${id}`);
  };

  const handleEdit = (id: number) => {
    router.push(`/companies/edit/${id}`);
  };

  const handleDelete = (name: string) => {
    const ok = window.confirm(`Delete ${name}?`);

    if (!ok) return;

    alert(`${name} deleted successfully. (Dummy CRUD)`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search Company..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <button
          className={styles.addBtn}
          onClick={() => router.push("/companies/add")}
        >
          + Add Company
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Company</th>
            <th>Admin</th>
            <th>Employees</th>
            <th>GST</th>
            <th>PF</th>
            <th>ESI</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.company}</td>
              <td>{company.admin}</td>
              <td>{company.employees}</td>
              <td>{company.gst}</td>
              <td>{company.pf}</td>
              <td>{company.esi}</td>

              <td>
                <span className={styles.status}>
                  {company.status}
                </span>
              </td>

              <td>
                <div className={styles.action}>
                  <button
                    className={styles.view}
                    onClick={() => handleView(company.id)}
                  >
                    View
                  </button>

                  <button
                    className={styles.edit}
                    onClick={() => handleEdit(company.id)}
                  >
                    Edit
                  </button>

                  <button
                    className={styles.delete}
                    onClick={() =>
                      handleDelete(company.company)
                    }
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {companies.length === 0 && (
            <tr>
              <td
                colSpan={8}
                style={{
                  textAlign: "center",
                  padding: "24px",
                  color: "#64748b",
                }}
              >
                No company found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <span>
          Showing {companies.length} of {filteredCompanies.length}
        </span>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </button>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}