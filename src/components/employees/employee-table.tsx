'use client';

import { useMemo, useState } from 'react';
import styles from './employee-table.module.css';
import { useRouter } from "next/navigation";

type EmployeeStatus = 'Active' | 'Inactive' | 'On Leave';

interface Employee {
  id: number;
  employeeId: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  joiningDate: string;
  status: EmployeeStatus;
}

const employees: Employee[] = [
  {
    id: 1,
    employeeId: 'EMP001',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@rstechinfo.com',
    phone: '+91 9876543210',
    department: 'Engineering',
    designation: 'Frontend Developer',
    joiningDate: '2023-01-12',
    status: 'Active',
  },
  {
    id: 2,
    employeeId: 'EMP002',
    name: 'Priya Singh',
    email: 'priya.singh@rstechinfo.com',
    phone: '+91 9876543211',
    department: 'HR',
    designation: 'HR Executive',
    joiningDate: '2022-09-08',
    status: 'Active',
  },
  {
    id: 3,
    employeeId: 'EMP003',
    name: 'Rahul Verma',
    email: 'rahul.verma@rstechinfo.com',
    phone: '+91 9876543212',
    department: 'Finance',
    designation: 'Accountant',
    joiningDate: '2021-11-17',
    status: 'Inactive',
  },
  {
    id: 4,
    employeeId: 'EMP004',
    name: 'Neha Kapoor',
    email: 'neha.kapoor@rstechinfo.com',
    phone: '+91 9876543213',
    department: 'Engineering',
    designation: 'Backend Developer',
    joiningDate: '2024-02-14',
    status: 'Active',
  },
  {
    id: 5,
    employeeId: 'EMP005',
    name: 'Aditya Mehta',
    email: 'aditya.mehta@rstechinfo.com',
    phone: '+91 9876543214',
    department: 'Sales',
    designation: 'Sales Manager',
    joiningDate: '2020-07-22',
    status: 'On Leave',
  },
  {
    id: 6,
    employeeId: 'EMP006',
    name: 'Sneha Patel',
    email: 'sneha.patel@rstechinfo.com',
    phone: '+91 9876543215',
    department: 'Marketing',
    designation: 'Marketing Executive',
    joiningDate: '2023-08-03',
    status: 'Active',
  },
  {
    id: 7,
    employeeId: 'EMP007',
    name: 'Vikram Joshi',
    email: 'vikram.joshi@rstechinfo.com',
    phone: '+91 9876543216',
    department: 'Support',
    designation: 'Support Engineer',
    joiningDate: '2022-04-18',
    status: 'Active',
  },
  {
    id: 8,
    employeeId: 'EMP008',
    name: 'Karan Malhotra',
    email: 'karan.malhotra@rstechinfo.com',
    phone: '+91 9876543217',
    department: 'Engineering',
    designation: 'UI/UX Designer',
    joiningDate: '2023-06-10',
    status: 'On Leave',
  },
  {
    id: 9,
    employeeId: 'EMP009',
    name: 'Riya Arora',
    email: 'riya.arora@rstechinfo.com',
    phone: '+91 9876543218',
    department: 'HR',
    designation: 'Recruiter',
    joiningDate: '2021-12-05',
    status: 'Active',
  },
  {
    id: 10,
    employeeId: 'EMP010',
    name: 'Mohit Kumar',
    email: 'mohit.kumar@rstechinfo.com',
    phone: '+91 9876543219',
    department: 'Finance',
    designation: 'Financial Analyst',
    joiningDate: '2022-10-01',
    status: 'Inactive',
  },
  {
    id: 11,
    employeeId: 'EMP011',
    name: 'Ananya Roy',
    email: 'ananya.roy@rstechinfo.com',
    phone: '+91 9876543220',
    department: 'Marketing',
    designation: 'Content Strategist',
    joiningDate: '2023-04-09',
    status: 'Active',
  },
  {
    id: 12,
    employeeId: 'EMP012',
    name: 'Rohit Gupta',
    email: 'rohit.gupta@rstechinfo.com',
    phone: '+91 9876543221',
    department: 'Support',
    designation: 'Technical Support',
    joiningDate: '2020-05-27',
    status: 'Active',
  },
];

const PAGE_SIZE = 6;

export default function EmployeeTable() {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All');
  const [status, setStatus] = useState('All');
  const [page, setPage] = useState(1);

  const router = useRouter();

  const departments = useMemo(
    () => ['All', ...new Set(employees.map((emp) => emp.department))],
    []
  );
    const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.employeeId.toLowerCase().includes(search.toLowerCase()) ||
        employee.email.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        department === 'All' || employee.department === department;

      const matchesStatus =
        status === 'All' || employee.status === status;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [search, department, status]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEmployees.length / PAGE_SIZE)
  );

  const currentPage = Math.min(page, totalPages);

  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );
const handleView = (employee: Employee) => {
  router.push(`/employees/${employee.id}`);
};

const handleEdit = (employee: Employee) => {
  router.push(`/employees/edit/${employee.id}`);
};

const handleDelete = (employee: Employee) => {
  const confirmed = window.confirm(
    `Are you sure you want to delete ${employee.name}?`
  );

  if (!confirmed) return;

  alert("Employee deleted successfully. (Dummy CRUD)");
};

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className={styles.searchInput}
        />

        <select
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            setPage(1);
          }}
          className={styles.select}
        >
          {departments.map((dept) => (
            <option key={dept}>{dept}</option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          className={styles.select}
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>On Leave</option>
        </select>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Phone</th>
              <th>Joining</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedEmployees.length === 0 ? (
              <tr>
                <td colSpan={8} className={styles.empty}>
                  No employees found.
                </td>
              </tr>
            ) : (
              paginatedEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.employeeId}</td>

                  <td>
                    <div className={styles.employeeInfo}>
                      <span className={styles.employeeName}>
                        {employee.name}
                      </span>

                      <span className={styles.employeeEmail}>
                        {employee.email}
                      </span>
                    </div>
                  </td>

                  <td>{employee.department}</td>

                  <td>{employee.designation}</td>

                  <td>{employee.phone}</td>

                  <td>{employee.joiningDate}</td>

                  <td>
                    <span
                      className={`${styles.status} ${
                        employee.status === 'Active'
                          ? styles.active
                          : employee.status === 'Inactive'
                          ? styles.inactive
                          : styles.leave
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>

                  <td>
                    <div className={styles.actions}>
                      <button
                        className={styles.viewButton}
                        onClick={() => handleView(employee)}
                      >
                        View
                      </button>

                      <button
                        className={styles.editButton}
                        onClick={() => handleEdit(employee)}
                      >
                        Edit
                      </button>

                      <button
                        className={styles.deleteButton}
                        onClick={() => handleDelete(employee)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
            <div className={styles.pagination}>
        <div className={styles.paginationInfo}>
          Showing{' '}
          {filteredEmployees.length === 0
            ? 0
            : (currentPage - 1) * PAGE_SIZE + 1}
          {' - '}
          {Math.min(currentPage * PAGE_SIZE, filteredEmployees.length)}
          {' of '}
          {filteredEmployees.length} employees
        </div>

        <div className={styles.paginationControls}>
          <button
            type="button"
            className={styles.pageButton}
            disabled={currentPage === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;

            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setPage(pageNumber)}
                className={`${styles.pageButton} ${
                  currentPage === pageNumber ? styles.activePage : ''
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            type="button"
            className={styles.pageButton}
            disabled={currentPage === totalPages}
            onClick={() =>
              setPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}