"use client";

import { ReactNode, useEffect } from "react";
import styles from "./company-dialog.module.css";

interface CompanyDialogProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function CompanyDialog({
  open,
  title,
  children,
  onClose,
}: CompanyDialogProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.dialog}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2>{title}</h2>

          <button
            className={styles.close}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
}