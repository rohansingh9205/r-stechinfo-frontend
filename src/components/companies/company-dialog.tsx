"use client";

import CompanyForm from "./company-form";
import styles from "./company-dialog.module.css";

type Props = {
  open?: boolean;
};

export default function CompanyDialog({ open = true }: Props) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <CompanyForm />
      </div>
    </div>
  );
}