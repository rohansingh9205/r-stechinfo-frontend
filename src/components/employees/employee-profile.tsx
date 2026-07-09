"use client";

import styles from "./employee-profile.module.css";

export default function EmployeeProfile() {
  const employee = {
    employeeId: "EMP001",
    firstName: "Rahul",
    lastName: "Sharma",
    company: "R&S Tech Info",
    department: "Engineering",
    designation: "Frontend Developer",
    email: "rahul@rstechinfo.com",
    phone: "+91 9876543210",
    joiningDate: "12 Jan 2024",
    dob: "20 Jun 1999",
    gender: "Male",
    employmentType: "Full Time",
    status: "Active",
    salary: "₹65,000",
    address: "New Delhi, India",
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          {employee.firstName.charAt(0)}
          {employee.lastName.charAt(0)}
        </div>

        <div>
          <h2>
            {employee.firstName} {employee.lastName}
          </h2>

          <p>{employee.designation}</p>

          <span className={styles.status}>{employee.status}</span>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Personal Information</h3>

          <div className={styles.item}>
            <span>Employee ID</span>
            <strong>{employee.employeeId}</strong>
          </div>

          <div className={styles.item}>
            <span>Email</span>
            <strong>{employee.email}</strong>
          </div>

          <div className={styles.item}>
            <span>Phone</span>
            <strong>{employee.phone}</strong>
          </div>

          <div className={styles.item}>
            <span>Gender</span>
            <strong>{employee.gender}</strong>
          </div>

          <div className={styles.item}>
            <span>Date of Birth</span>
            <strong>{employee.dob}</strong>
          </div>

          <div className={styles.item}>
            <span>Address</span>
            <strong>{employee.address}</strong>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Employment Details</h3>

          <div className={styles.item}>
            <span>Company</span>
            <strong>{employee.company}</strong>
          </div>

          <div className={styles.item}>
            <span>Department</span>
            <strong>{employee.department}</strong>
          </div>

          <div className={styles.item}>
            <span>Designation</span>
            <strong>{employee.designation}</strong>
          </div>

          <div className={styles.item}>
            <span>Joining Date</span>
            <strong>{employee.joiningDate}</strong>
          </div>

          <div className={styles.item}>
            <span>Employment Type</span>
            <strong>{employee.employmentType}</strong>
          </div>

          <div className={styles.item}>
            <span>Salary</span>
            <strong>{employee.salary}</strong>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Attendance Summary</h3>

          <div className={styles.stats}>
            <div>
              <h4>22</h4>
              <span>Present</span>
            </div>

            <div>
              <h4>2</h4>
              <span>Leave</span>
            </div>

            <div>
              <h4>1</h4>
              <span>Absent</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Payroll Summary</h3>

          <div className={styles.item}>
            <span>Basic Salary</span>
            <strong>₹65,000</strong>
          </div>

          <div className={styles.item}>
            <span>Bonus</span>
            <strong>₹5,000</strong>
          </div>

          <div className={styles.item}>
            <span>Deductions</span>
            <strong>₹2,000</strong>
          </div>

          <div className={styles.item}>
            <span>Net Salary</span>
            <strong>₹68,000</strong>
          </div>
        </div>
      </div>
    </div>
  );
}