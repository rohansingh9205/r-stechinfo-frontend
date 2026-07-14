"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./company-table.module.css";
import {
  getCompanies,
  deleteCompany,
} from "@/lib/api";

interface Company {
  id: number;
  companyName: string;
  adminName: string;
  gstNumber: string;
  pfNumber: string;
  esiNumber: string;
  status: string;
}

const PAGE_SIZE = 5;

export default function CompanyTable() {

  const router = useRouter();

  const [companyData, setCompanyData] = useState<Company[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {

    async function loadCompanies() {

      try {

        const data = await getCompanies();

        setCompanyData(data);

      } catch (error) {

        console.error(error);

      }

    }

    loadCompanies();

  }, []);

  const filteredCompanies = useMemo(() => {

    return companyData.filter((company) =>

      company.companyName.toLowerCase().includes(search.toLowerCase()) ||

      company.adminName.toLowerCase().includes(search.toLowerCase()) ||

      company.gstNumber.toLowerCase().includes(search.toLowerCase())

    );

  }, [companyData, search]);

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

 const handleDelete = async (id: number, name: string) => {

  console.log("Delete clicked", id, name);

  const ok = window.confirm(`Delete ${name}?`);

  if (!ok) return;

  try {

    await deleteCompany(id);

    setCompanyData((prev) =>
      prev.filter((company) => company.id !== id)
    );

    alert("Company deleted successfully.");

  } catch (error) {

    console.error(error);

    alert("Delete failed.");

  }

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

              <td>{company.companyName}</td>

              <td>{company.adminName}</td>

              <td>0</td>

              <td>{company.gstNumber}</td>

              <td>{company.pfNumber}</td>

              <td>{company.esiNumber}</td>

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
  onClick={() => handleDelete(company.id, company.companyName)}
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