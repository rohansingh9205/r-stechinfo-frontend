"use client";

import styles from "./employee-table.module.css";

const employees = [
  {
    id: "EMP001",
    name: "Rohan Singh",
    company: "Khushi Hind",
    department: "IT",
    designation: "Frontend Developer",
    status: "Active",
  },
  {
    id: "EMP002",
    name: "Amit Kumar",
    company: "ABC Industries",
    department: "HR",
    designation: "HR Manager",
    status: "Active",
  },
  {
    id: "EMP003",
    name: "Neha Sharma",
    company: "Khushi Hind",
    department: "Accounts",
    designation: "Accountant",
    status: "On Hold",
  },
];

export default function EmployeeTable() {
  return (
    <div className={styles.container}>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search Employee..."
          style={{
            width: "320px",
            padding: "12px",
          }}
        />

        <button>
          + Add Employee
        </button>
      </div>

      <table>

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Company</th>

            <th>Department</th>

            <th>Designation</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (

            <tr key={employee.id}>

              <td>{employee.id}</td>

              <td>{employee.name}</td>

              <td>{employee.company}</td>

              <td>{employee.department}</td>

              <td>{employee.designation}</td>

              <td>{employee.status}</td>

              <td>

                <a href="/employees/EMP001">
                <button>View</button>
                </a>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}