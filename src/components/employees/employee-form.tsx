"use client";

import { FormEvent, useState } from "react";
import styles from "./employee-form.module.css";

export interface EmployeeFormData {
  employeeId: string;
  firstName: string;
  lastName: string;
  company: string;
  department: string;
  designation: string;
  joiningDate: string;
  gender: string;
  dob: string;
  phone: string;
  email: string;
  employmentType: string;
  status: string;
  salary: string;
  address: string;
}

interface EmployeeFormProps {
  initialData?: Partial<EmployeeFormData>;
  onSubmit?: (data: EmployeeFormData) => void;
  onCancel?: () => void;
}

const initialForm: EmployeeFormData = {
  employeeId: "",
  firstName: "",
  lastName: "",
  company: "",
  department: "",
  designation: "",
  joiningDate: "",
  gender: "",
  dob: "",
  phone: "",
  email: "",
  employmentType: "Full Time",
  status: "Active",
  salary: "",
  address: "",
};

export default function EmployeeForm({
  initialData,
  onSubmit,
  onCancel,
}: EmployeeFormProps) {
  const [formData, setFormData] = useState<EmployeeFormData>({
    ...initialForm,
    ...initialData,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(formData);
      return;
    }

    alert("Employee Saved");
    console.log(formData);
  };

  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <h2>Add Employee</h2>

      <div className={styles.grid}>
        <div className={styles.group}>
          <label>Employee ID</label>
          <input
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            placeholder="EMP001"
          />
        </div>

        <div className={styles.group}>
          <label>First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>

        <div className={styles.group}>
          <label>Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>

        <div className={styles.group}>
          <label>Company</label>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
          />
        </div>

        <div className={styles.group}>
          <label>Department</label>
          <input
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
          />
        </div>

        <div className={styles.group}>
          <label>Designation</label>
          <input
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation"
          />
        </div>

        <div className={styles.group}>
          <label>Joining Date</label>
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className={styles.group}>
          <label>Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>

        <div className={styles.group}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <div className={styles.group}>
          <label>Employment Type</label>
          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
          >
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Contract</option>
            <option>Intern</option>
          </select>
        </div>

        <div className={styles.group}>
          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Inactive</option>
            <option>On Leave</option>
          </select>
        </div>

        <div className={styles.group}>
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Salary"
          />
        </div>

        <div className={`${styles.group} ${styles.fullWidth}`}>
          <label>Address</label>
          <textarea
            rows={4}
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Employee Address"
          />
        </div>
      </div>

      <div className={styles.buttons}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>

        <button type="submit">Save Employee</button>
      </div>
    </form>
  );
}