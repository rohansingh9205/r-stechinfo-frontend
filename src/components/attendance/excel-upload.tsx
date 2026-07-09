"use client";

import { useRef, useState } from "react";
import styles from "./excel-upload.module.css";

export default function ExcelUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className={styles.container}>
      <h2>Excel Attendance Upload</h2>

      <button onClick={() => inputRef.current?.click()}>
        Browse File
      </button>

      <input
        ref={inputRef}
        type="file"
        hidden
        accept=".xlsx,.xls,.csv"
        onChange={(e) => {
          if (e.target.files?.length) {
            setFile(e.target.files[0]);
          }
        }}
      />

      {file && <p>{file.name}</p>}
    </div>
  );
}