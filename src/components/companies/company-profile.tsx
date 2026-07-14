"use client";

import { useEffect, useState } from "react";
import styles from "./company-profile.module.css";
import { getCompanyById } from "@/lib/api";

interface Props {
  id: number;
}

export default function CompanyProfile({ id }: Props) {

  const [company, setCompany] = useState<any>(null);

  useEffect(() => {

    async function loadCompany() {

      try {

        const data = await getCompanyById(id);

        setCompany(data);

      } catch (error) {

        console.error(error);

      }

    }

    loadCompany();

  }, [id]);

  if (!company) {

    return <h2>Loading...</h2>;

  }

  return (

    <div className={styles.container}>

      <div className={styles.header}>

        <div>

          <h2>{company.companyName}</h2>

          <p>ID : {company.id}</p>

        </div>

        <span className={styles.status}>

          {company.status}

        </span>

      </div>

      <div className={styles.grid}>

        <div className={styles.card}>

          <h3>Company Information</h3>

          <div className={styles.item}>
            <span>Company Name</span>
            <strong>{company.companyName}</strong>
          </div>

          <div className={styles.item}>
            <span>Admin</span>
            <strong>{company.adminName}</strong>
          </div>

          <div className={styles.item}>
            <span>Email</span>
            <strong>{company.email}</strong>
          </div>

          <div className={styles.item}>
            <span>Phone</span>
            <strong>{company.phone}</strong>
          </div>

          <div className={styles.item}>
            <span>Address</span>
            <strong>{company.address}</strong>
          </div>

        </div>

        <div className={styles.card}>

          <h3>Compliance Details</h3>

          <div className={styles.item}>
            <span>GST</span>
            <strong>{company.gstNumber}</strong>
          </div>

          <div className={styles.item}>
            <span>PF</span>
            <strong>{company.pfNumber}</strong>
          </div>

          <div className={styles.item}>
            <span>ESI</span>
            <strong>{company.esiNumber}</strong>
          </div>

        </div>

      </div>

    </div>

  );

}