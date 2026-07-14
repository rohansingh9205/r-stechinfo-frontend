"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import styles from "./company-form.module.css";

import {
  createCompany,
  getCompanyById,
  updateCompany,
} from "@/lib/api";

export default function CompanyForm() {

  const router = useRouter();

  const params = useParams();

  const isEdit = params?.id !== undefined;

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({

    companyName: "",
    adminName: "",
    gstNumber: "",
    pfNumber: "",
    esiNumber: "",
    phone: "",
    email: "",
    status: "ACTIVE",
    address: "",

  });

  useEffect(() => {

    if (!isEdit) return;

    async function loadCompany() {

      try {

        const data = await getCompanyById(
          Number(params.id)
        );

        setForm({

          companyName: data.companyName,
          adminName: data.adminName,
          gstNumber: data.gstNumber,
          pfNumber: data.pfNumber,
          esiNumber: data.esiNumber,
          phone: data.phone,
          email: data.email,
          status: data.status,
          address: data.address,

        });

      } catch (error) {

        console.error(error);

      }

    }

    loadCompany();

  }, [isEdit, params]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  }

  async function handleSubmit() {

    if (
      !form.companyName ||
      !form.adminName ||
      !form.email
    ) {

      alert("Please fill required fields.");

      return;

    }

    try {

      setLoading(true);

      let result;

      if (isEdit) {

        result = await updateCompany(
          Number(params.id),
          form
        );

      } else {

        result = await createCompany(form);

      }

      console.log(result);

      alert(

        isEdit
          ? "Company Updated Successfully."
          : "Company Created Successfully."

      );

      router.push("/companies");

    } catch (error: any) {

      console.error(error);

      alert(error.message);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className={styles.container}>

      <h2>

        {isEdit
          ? "Edit Company"
          : "Add Company"}

      </h2>

      <div className={styles.grid}>

        <div className={styles.inputGroup}>

          <label>Company Name</label>

          <input
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="Company Name"
          />

        </div>

        <div className={styles.inputGroup}>

          <label>Admin Name</label>

          <input
            name="adminName"
            value={form.adminName}
            onChange={handleChange}
            placeholder="Admin Name"
          />

        </div>

        <div className={styles.inputGroup}>

          <label>GST Number</label>

          <input
            name="gstNumber"
            value={form.gstNumber}
            onChange={handleChange}
            placeholder="GST Number"
          />

        </div>

        <div className={styles.inputGroup}>

          <label>PF Number</label>

          <input
            name="pfNumber"
            value={form.pfNumber}
            onChange={handleChange}
            placeholder="PF Number"
          />

        </div>
                <div className={styles.inputGroup}>

          <label>ESI Number</label>

          <input
            name="esiNumber"
            value={form.esiNumber}
            onChange={handleChange}
            placeholder="ESI Number"
          />

        </div>

        <div className={styles.inputGroup}>

          <label>Phone Number</label>

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />

        </div>

        <div className={styles.inputGroup}>

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Company Email"
          />

        </div>

        <div className={styles.inputGroup}>

          <label>Status</label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >

            <option value="ACTIVE">
              Active
            </option>

            <option value="ON_HOLD">
              On Hold
            </option>

          </select>

        </div>

      </div>

      <div className={styles.addressBox}>

        <label>Company Address</label>

        <textarea
          rows={4}
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Company Address"
        />

      </div>

      <div className={styles.buttonArea}>

        <button
          className={styles.cancel}
          onClick={() => router.push("/companies")}
        >
          Cancel
        </button>

        <button
          type="button"
          className={styles.save}
          onClick={handleSubmit}
          disabled={loading}
        >

          {loading
            ? "Saving..."
            : isEdit
            ? "Update Company"
            : "Save Company"}

        </button>

      </div>

    </div>

  );

}